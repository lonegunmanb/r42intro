import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, BrainCircuit, Calculator, ChevronsLeft, ChevronsRight, ClipboardCheck, Clock3, Code2, ExternalLink, FileCheck2, FileText, Grid2X2, Image, Maximize2, Search, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { reports, scenes, sectionLabels, type ReportKey, type Scene } from './content/scenes'

type Camera = { x: number; y: number; zoom: number }
type ExpandableScene = 'agent-comic' | 'worlds' | 'static-research-comic' | 'tool-context-budget-comic' | 'context-compression-infographic' | 'chokepoint-workflow' | 'chokepoint-infographic' | 'secjury-process-infographic'

const sceneCameras: Record<string, Camera> = {
  opening: { x: .24, y: .43, zoom: 1.08 },
  model: { x: .28, y: .55, zoom: 1.8 },
  hallucination: { x: .17, y: .74, zoom: 1.85 },
  'finance-risk': { x: .25, y: .8, zoom: 1.9 },
  'context-window': { x: .32, y: .64, zoom: 1.95 },
  'context-compression': { x: .34, y: .64, zoom: 1.95 },
  'context-compression-infographic': { x: .5, y: .5, zoom: 1 },
  'prompt-stack': { x: .3, y: .53, zoom: 1.95 },
  'research-crew': { x: .34, y: .57, zoom: 1.9 },
  agent: { x: .37, y: .55, zoom: 1.85 },
  'agent-comic': { x: .4, y: .6, zoom: 1.85 },
  gemini: { x: .26, y: .33, zoom: 1.8 },
  sources: { x: .4, y: .44, zoom: 1.75 },
  'why-build': { x: .56, y: .46, zoom: 1.75 },
  'single-agent': { x: .52, y: .56, zoom: 1.8 },
  worlds: { x: .49, y: .73, zoom: 1.9 },
  'r42-boundary': { x: .52, y: .7, zoom: 2 },
  'static-research-comic': { x: .53, y: .68, zoom: 1.95 },
  'tool-context-budget-comic': { x: .53, y: .68, zoom: 1.95 },
  map: { x: .5, y: .5, zoom: 1 },
  runtime: { x: .27, y: .75, zoom: 1.75 },
  chokepoint: { x: .88, y: .78, zoom: 1.95 },
  'chokepoint-workflow': { x: .88, y: .72, zoom: 1.85 },
  'chokepoint-infographic': { x: .88, y: .72, zoom: 1.85 },
  'secjury-intro': { x: .74, y: .44, zoom: 1.35 },
  'secjury-process': { x: .74, y: .44, zoom: 1.35 },
  'secjury-process-infographic': { x: .74, y: .44, zoom: 1.35 },
  'report-interpretation': { x: .74, y: .44, zoom: 1.35 },
  'research-scope': { x: .74, y: .44, zoom: 1.35 },
  qa: { x: .5, y: .5, zoom: 1 },
}

const landmarks = [
  { label: '入港与风险', index: 0, x: 15, y: 51 },
  { label: '语言工坊', index: 1, x: 29, y: 55 },
  { label: 'Agent 与 Harness', index: 9, x: 37, y: 64 },
  { label: '开放研究', index: 11, x: 26, y: 34 },
  { label: '过滤船闸', index: 15, x: 48, y: 69 },
  { label: '机器人街区', index: 21, x: 88, y: 77 },
  { label: '估值质询', index: 24, x: 74, y: 44 },
]

const atlasImage = `${import.meta.env.BASE_URL}images/research-atlas.png`
const agentComicImage = `${import.meta.env.BASE_URL}images/page-10-agent-comic.png`
const contextRotImage = `${import.meta.env.BASE_URL}images/page-15-context-rot.png`
const staticResearchImage = `${import.meta.env.BASE_URL}images/page-17-static-research.png`
const toolContextBudgetImage = `${import.meta.env.BASE_URL}images/tool-context-budget-comic.png`
const contextCompressionImage = `${import.meta.env.BASE_URL}images/context-compression-infographic.png`
const chokepointWorkflowImage = `${import.meta.env.BASE_URL}images/chokepoint-workflow.png`
const chokepointInfographicImage = `${import.meta.env.BASE_URL}images/chokepoint-infographic.png`
const secjuryProcessImage = `${import.meta.env.BASE_URL}images/secjury-process-infographic.png`
const expandedImageDetails: Record<ExpandableScene, { src: string; label: string; alt: string }> = {
  'agent-comic': { src: agentComicImage, label: 'Agent 工作原理六格漫画', alt: 'Agent 工作原理六格漫画：接到任务、思考、行动、观察、再行动与检查、完成或请人介入' },
  worlds: { src: contextRotImage, label: '上下文退化四格漫画', alt: '四格漫画：上下文短时研究顺利，资料堆积后关键线索被淹没，目标与推理开始不稳定' },
  'static-research-comic': { src: staticResearchImage, label: 'static_research 四阶段插画', alt: '四个机器人工作站分别负责资料收集、材料质检、封闭研究和可选的成果质检；封闭研究仅使用已有材料并标注证据缺口' },
  'tool-context-budget-comic': { src: toolContextBudgetImage, label: '工具上下文预算漫画', alt: '四格太阳朋克漫画：工具、MCP 和 Skill 过多会挤占 Agent 的工作上下文；r42 按任务声明加载刚刚够用的能力' },
  'context-compression-infographic': { src: contextCompressionImage, label: '上下文压缩信息图', alt: '上下文压缩信息图：压缩前上下文容量接近上限，经过压缩后容量恢复，但原始信息中的限定条件和来源关系可能被简化' },
  'chokepoint-workflow': { src: chokepointWorkflowImage, label: '产业链研究工厂流程图', alt: '研究工厂：官方来源基线和产品范围进入五条并行证据线，构成参考供应链图；供应连续性风险与上市公司线索分别核查，最终形成可追溯报告' },
  'chokepoint-infographic': { src: chokepointInfographicImage, label: '产业链研究信息图', alt: '人形机器人产业链研究信息图，汇总 A/B/C 研究优先级、供应交付状态、公司线索和关键观察点；证据截至 2026 年 10 月 22 日' },
  'secjury-process-infographic': { src: secjuryProcessImage, label: 'SECJURY 研究流程信息图', alt: 'SECJURY 研究流程信息图：从确认证券、收集证据、归一化财务数据、构建 DCF 估值、多视角质询到汇总研究报告' },
}
const geminiResearchExample = 'https://share.gemini.google/Zov0RCDGf2HN'
const contextRotResearch = 'https://www.trychroma.com/research/context-rot'
const notebookReportExample = 'https://notebook.google.com/notebook/4f3186d7-a79d-4697-bad3-efcf06a37ffd'
const geminiCanvasExample = 'https://share.gemini.google/rc9eW91iBY0V'
const skyfiSavedAoi = 'https://app.skyfi.com/saved-aoi'

function fitCamera(camera: Camera, width: number, height: number): Camera {
  const worldWidth = Math.max(width, height * 16 / 9)
  const worldHeight = worldWidth * 9 / 16
  const zoom = width <= 800 ? Math.min(camera.zoom, 1.25) : camera.zoom
  const halfVisibleX = width / worldWidth / zoom / 2
  const halfVisibleY = height / worldHeight / zoom / 2
  return {
    x: Math.max(halfVisibleX, Math.min(1 - halfVisibleX, camera.x)),
    y: Math.max(halfVisibleY, Math.min(1 - halfVisibleY, camera.y)),
    zoom,
  }
}

function sceneFromHash() {
  const id = window.location.hash.replace('#', '')
  return scenes.findIndex((scene) => scene.id === id)
}

function App() {
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, sceneFromHash()))
  const [reportOpen, setReportOpen] = useState<ReportKey | null>(null)
  const [showMap, setShowMap] = useState(false)
  const [expandedImage, setExpandedImage] = useState<ExpandableScene | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [startedAt] = useState(() => Date.now())
  const [now, setNow] = useState(() => Date.now())
  const active = scenes[activeIndex]

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(scenes.length - 1, index))
    if (next === activeIndex) return
    // Hide the current deck before changing the scene, so the next scene
    // cannot flash above the map while its camera is moving.
    setIsTransitioning(true)
    setActiveIndex(next)
    window.history.replaceState(null, '', `#${scenes[next].id}`)
  }

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (reportOpen) {
        if (event.key === 'Escape') setReportOpen(null)
        return
      }
      if (expandedImage) {
        if (event.key === 'Escape') setExpandedImage(null)
        return
      }
      if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') goTo(activeIndex + 1)
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') goTo(activeIndex - 1)
      if (event.key.toLowerCase() === 'm') setShowMap(true)
      if (event.key === 'Escape') setShowMap(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, reportOpen, expandedImage])

  useEffect(() => {
    const onHashChange = () => {
      const index = sceneFromHash()
      if (index >= 0 && index !== activeIndex) {
        setIsTransitioning(true)
        setActiveIndex(index)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [activeIndex])

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const elapsed = Math.floor((now - startedAt) / 60000)
  const progress = ((activeIndex + 1) / scenes.length) * 100

  return (
    <main className={`app accent-${active.accent}`}>
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <button className="brand" onClick={() => goTo(0)} aria-label="回到开场">
          <span className="brand-mark">r42</span><span className="brand-divider" /> <span>金融研究型智能体探索</span>
        </button>
        <div className="top-actions">
          <span className="live-clock"><Clock3 size={14} /> {String(elapsed).padStart(2, '0')}′</span>
          <button className="icon-button" onClick={() => setShowMap(true)} title="打开研究地图"><Grid2X2 size={18} /></button>
        </div>
      </header>

      <section className="stage" aria-live="polite">
        <SceneMap activeIndex={activeIndex} onTransitionChange={setIsTransitioning} />
        <div className={`scene-counter ${active.id === 'chokepoint-workflow' || active.id === 'chokepoint-infographic' || active.id === 'secjury-process-infographic' ? 'scene-counter-hidden' : ''}`}><span>{String(active.number).padStart(2, '0')}</span><i />{scenes.length}</div>
        <article className={`scene ${active.id === 'opening' ? 'opening-scene' : ''} ${active.id === 'model' || active.id === 'finance-risk' || active.id === 'context-window' || active.id === 'research-crew' || active.id === 'worlds' ? 'image-scene' : ''} ${active.id === 'research-crew' || active.id === 'gemini' || active.id === 'sources' || active.id === 'single-agent' || active.id === 'r42-boundary' ? 'dense-scene' : ''} ${active.id === 'gemini' ? 'gemini-scene' : ''} ${active.id === 'sources' ? 'sources-scene' : ''} ${active.id === 'single-agent' ? 'single-agent-scene' : ''} ${active.id === 'worlds' ? 'worlds-scene' : ''} ${active.id === 'r42-boundary' ? 'r42-workflow-scene' : ''} ${active.id === 'chokepoint' ? 'case-flow-scene' : ''} ${active.id.startsWith('secjury-') && active.id !== 'secjury-process-infographic' ? 'secjury-scene' : ''} ${active.id === 'agent-comic' || active.id === 'static-research-comic' || active.id === 'tool-context-budget-comic' ? 'comic-scene' : ''} ${active.id === 'context-compression-infographic' || active.id === 'chokepoint-workflow' || active.id === 'chokepoint-infographic' || active.id === 'secjury-process-infographic' ? 'image-slide-scene' : ''} ${isTransitioning ? 'scene-hidden' : ''}`} key={active.id} aria-label={`第 ${active.number} 页：${active.title}`}>
          <div className="scene-copy">
            <p className="kicker"><span className="kicker-dot" />{active.kicker}</p>
            <h1>{active.title}</h1>
            {active.id === 'gemini' && <a className="research-example-link" href={geminiResearchExample} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /><span><b>打开深度研究示例</b><small>share.gemini.google/Zov0RCDGf2HN</small></span></a>}
            {active.id === 'worlds' && <a className="context-rot-link" href={contextRotResearch} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /><span>阅读 Chroma 原文：Context Rot</span></a>}
            {active.id === 'report-interpretation' && <a className="research-example-link" href={notebookReportExample} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /><span><b>打开 Google Notebook 示例</b><small>notebook.google.com/notebook/4f3186d7-a79d-4697-bad3-efcf06a37ffd</small></span></a>}
            {active.id === 'report-interpretation' && <a className="research-example-link" href={geminiCanvasExample} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /><span><b>打开 Gemini Canvas 交互式报告示例</b><small>share.gemini.google/rc9eW91iBY0V</small></span></a>}
            {active.id === 'research-scope' && <a className="research-example-link" href={skyfiSavedAoi} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /><span><b>打开 SkyFi 另类数据示例</b><small>app.skyfi.com/saved-aoi</small></span></a>}
            <p className="summary">{active.summary}</p>
            <p className="statement">{active.statement}</p>
            <div className="tag-row" aria-label="本页关键词">
              {active.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            {active.id === 'agent' && <div className="agent-control-note"><b>边界仍由人设定</b><span>Agent 不等于完全自主：行动范围、可用工具、预算和终止条件，仍由开发者设计和控制。</span></div>}
            {active.id === 'single-agent' && <div className="single-agent-note"><b>一个智能体，不是一次模型调用</b><span>程序会反复调用同一个模型，让它根据工具反馈继续决策。</span></div>}
            {active.id === 'gemini' && <div className="gemini-extras"><p><b>原理（简化）</b>围绕计划多轮查找和阅读资料，再根据已找到的内容决定是否继续补充，最后综合成报告。</p></div>}
            {active.id === 'runtime' && <div className="runtime-card"><Clock3 size={16} /><span>现场展示 r42 终端；完整报告提前生成。</span><em>LIVE DEMO</em></div>}
            {active.reportKey && <button className="report-button" onClick={() => setReportOpen(active.reportKey!)}><BookOpen size={16} />打开{reports[active.reportKey].label}</button>}
          </div>
          <div className={`scene-art ${active.id === 'model' ? 'model-art' : ''} ${active.id === 'finance-risk' ? 'finance-risk-art' : ''} ${active.id === 'context-window' ? 'context-window-art' : ''} ${active.id === 'research-crew' ? 'agent-components-art' : ''}`}><SceneVisual scene={active} />{(active.id === 'agent-comic' || active.id === 'worlds' || active.id === 'static-research-comic' || active.id === 'tool-context-budget-comic' || active.id === 'context-compression-infographic' || active.id === 'chokepoint-workflow' || active.id === 'chokepoint-infographic' || active.id === 'secjury-process-infographic') && <button className="comic-expand icon-button" onClick={() => setExpandedImage(active.id as ExpandableScene)} aria-label={`放大查看${expandedImageDetails[active.id as ExpandableScene].label}`} title={`放大查看${expandedImageDetails[active.id as ExpandableScene].label}`}><Maximize2 size={18} /></button>}</div>
        </article>
      </section>

      <footer className="bottombar">
        <div className="nav-cluster">
          <button className="nav-button skip-button" onClick={() => goTo(0)} disabled={activeIndex === 0} title="回到第一张" aria-label="回到第一张"><ChevronsLeft size={18} /></button>
          <button className="nav-button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} title="上一页" aria-label="上一页"><ArrowLeft size={18} /></button>
        </div>
        <div className="progress-wrap"><div className="progress-label"><span>演示页面</span><span>{active.minutes} min</span></div><div className="progress"><span style={{ width: `${progress}%` }} /></div></div>
        <div className="nav-cluster">
          <button className="nav-button primary" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === scenes.length - 1} title="下一页" aria-label="下一页"><ArrowRight size={18} /></button>
          <button className="nav-button skip-button" onClick={() => goTo(scenes.length - 1)} disabled={activeIndex === scenes.length - 1} title="跳到最后一张" aria-label="跳到最后一张"><ChevronsRight size={18} /></button>
        </div>
      </footer>

      {showMap && <MapOverlay active={active} onClose={() => setShowMap(false)} onSelect={(index) => { setShowMap(false); goTo(index) }} />}
      {reportOpen && <ReportViewer reportKey={reportOpen} onClose={() => setReportOpen(null)} />}
      {expandedImage && <div className={`overlay comic-overlay ${expandedImage === 'context-compression-infographic' || expandedImage === 'chokepoint-workflow' || expandedImage === 'chokepoint-infographic' ? 'infographic-overlay' : ''}`} role="dialog" aria-modal="true" aria-label={expandedImageDetails[expandedImage].label}>
        <button className="close-button comic-close" onClick={() => setExpandedImage(null)} aria-label="关闭大图"><X size={20} /></button>
        <div className="comic-zoom-scroll"><img src={expandedImageDetails[expandedImage].src} alt={expandedImageDetails[expandedImage].alt} /></div>
      </div>}
    </main>
  )
}

function SceneMap({ activeIndex, onTransitionChange }: { activeIndex: number; onTransitionChange: (moving: boolean) => void }) {
  const [viewport, setViewport] = useState(() => ({ width: window.innerWidth, height: window.innerHeight }))
  const [camera, setCamera] = useState(() => fitCamera(sceneCameras[scenes[activeIndex].id], window.innerWidth, window.innerHeight))
  const previousIndex = useRef(activeIndex)

  useEffect(() => {
    const onResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const target = fitCamera(sceneCameras[scenes[activeIndex].id], viewport.width, viewport.height)
    const previous = sceneCameras[scenes[previousIndex.current].id]
    const changed = activeIndex !== previousIndex.current
    const farMove = Math.hypot(target.x - previous.x, target.y - previous.y) > .22
    if (!changed || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      previousIndex.current = activeIndex
      setCamera(target)
      onTransitionChange(false)
      return
    }
    previousIndex.current = activeIndex
    onTransitionChange(true)
    if (farMove) setCamera(fitCamera({ x: .5, y: .5, zoom: 1 }, viewport.width, viewport.height))
    const timer = window.setTimeout(() => setCamera(target), 850)
    const revealTimer = window.setTimeout(() => onTransitionChange(false), farMove ? 980 : 900)
    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(revealTimer)
    }
  }, [activeIndex, viewport, onTransitionChange])

  return <div className="map-window" aria-hidden="true">
    <div className="map-world" style={{ transform: `translate(${-camera.x * camera.zoom * 100}%, ${-camera.y * camera.zoom * 100}%) scale(${camera.zoom})` }}>
      <img src={atlasImage} alt="" />
    </div>
  </div>
}

function SceneVisual({ scene }: { scene: Scene }) {
  if (scene.id === 'opening') return <div className="risk-visual"><div className="risk-symbol">!</div><div className="risk-lines"><span>个人研究</span><span>进行中</span><span>未经验证</span></div><div className="risk-stamp">NOT<br />INVESTMENT<br />ADVICE</div></div>
  if (scene.id === 'secjury-intro') return <div className="secjury-purpose">
    <div className="secjury-purpose-mark">SJ</div><div><b>研究型估值审查</b><span>SECURITIES · EVIDENCE · CRITIQUE</span></div>
    <p>把“这家公司值多少？”拆成一组能追来源、能复算、能被反驳的问题。</p>
    <div className="secjury-purpose-outputs"><span>证据与假设</span><i>→</i><span>估值模型</span><i>→</i><span>质询报告</span></div>
    <small>辅助研究判断，不自动交易，也不替人作出投资决定。</small>
  </div>
  if (scene.id === 'secjury-process') return <div className="secjury-process-visual" aria-label="SECJURY 研究流程">
    <div className="secjury-process-step"><small>01 / IDENTIFY</small><b>确认证券</b><span>核对公司、代码、交易所和估值日期</span></div>
    <div className="secjury-process-step"><small>02 / COLLECT</small><b>收集证据</b><span>公告、招股书、财报、市场价格与外部研究</span></div>
    <div className="secjury-process-step"><small>03 / NORMALIZE</small><b>整理数据</b><span>统一期间、单位、历史财务和预测口径</span></div>
    <div className="secjury-process-step"><small>04 / MODEL</small><b>计算估值</b><span>构建 DCF，检查现金流、资本成本与敏感性</span></div>
    <div className="secjury-process-step"><small>05 / CHALLENGE</small><b>多角度质询</b><span>冻结输入，让不同投资视角检查脆弱假设</span></div>
    <div className="secjury-process-step"><small>06 / REPORT</small><b>汇总交付</b><span>呈现结果、反对意见、证据缺口和限制</span></div>
    <div className="secjury-process-feedback">质询发现的问题回到证据与假设层，记录待补材料；不在评审中静默改写冻结模型。</div>
  </div>
  if (scene.id === 'why-build') return <div className="why-build-visual"><div><b>工具</b><span>指定搜索、代码与算法</span></div><div><b>信息源</b><span>接入私有数据库与专门数据</span></div><div><b>计算</b><span>高精度、可复现的数值工作</span></div><div><b>流水线</b><span>把多个研究管线连接起来</span></div></div>
  if (scene.id === 'single-agent') return <div className="single-agent-visual">
    <div className="single-agent-intro"><span>任务目标</span><strong>一个模型贯穿规划、执行与反思</strong></div>
    <div className="single-agent-core"><BrainCircuit size={36} strokeWidth={1.6} /><div><b>同一个大语言模型</b><span>持续读取任务、已有推理与工具反馈</span></div></div>
    <div className="single-agent-cycle" aria-label="规划、执行、反思循环">
      <div><small>01</small><b>规划</b><span>决定下一步</span></div><i>→</i><div><small>02</small><b>执行</b><span>选择并调用工具</span></div><i>→</i><div><small>03</small><b>反思</b><span>依据结果调整计划</span></div>
    </div>
    <div className="single-agent-tools"><span>可用工具</span><div><Search size={16} />搜索</div><div><FileText size={16} />读文件</div><div><Calculator size={16} />计算</div><div><Code2 size={16} />代码</div></div>
    <div className="single-agent-feedback">↶ 工具结果返回同一工作上下文，进入下一轮</div>
    <div className="single-agent-tradeoffs"><section><b>优势</b><p>共享当前上下文，少了跨智能体协调与信息传递；可通过端到端强化学习优化整条决策链。</p></section><section><b>代价</b><p>依赖长上下文、稳定推理与工具调用；单独优化某一步也更困难。</p></section></div>
    <p className="single-agent-examples">类似 ReAct 循环的代表研究：Agent-R1 · ReSearch · Search-R1</p>
  </div>
  if (scene.id === 'context-window') return <div className="model-visual model-visual-image"><img className="model-image" src={`${import.meta.env.BASE_URL}images/context-window.png`} alt="机器人吞入报告、搜索结果和对话记录后吃撑，预计和投产后等关键条件掉出" /></div>
  if (scene.id === 'context-compression') return <div className="compression-visual"><div className="compression-source"><b>原始上下文</b><span>完整规则 · 例外条件 · 来源链接 · 用户任务</span></div><div className="compression-arrow">压缩成更短的摘要 ↓</div><div className="compression-summary"><b>压缩摘要</b><span>保留大意，但可能漏掉限定词、数字条件和来源关系</span></div><div className="compression-loss"><span>预计</span><span>仅限投产后</span><span>来源：年报第 18 页</span></div></div>
  if (scene.id === 'context-compression-infographic') return <img className="context-compression-slide-image" src={contextCompressionImage} alt="上下文压缩信息图：压缩前上下文容量接近上限，经过压缩后容量恢复，但原始信息中的限定条件和来源关系可能被简化" />
  if (scene.id === 'prompt-stack') return <div className="prompt-stack-visual"><div><b>系统提示词 = 工作制度</b><span>长期规定：研究员要遵守什么规则，哪些事不能做。</span></div><div><b>用户提示词 = 任务单</b><span>这一次要研究什么问题，要交付什么结果。</span></div><div><b>工具 = 手边动作</b><span>搜索、读文件、运行代码、计算数字。</span></div><div><b>MCP = 外部连接</b><span>把数据库、服务或应用接到工具台上。</span></div><div><b>Skill = 操作手册</b><span>完成一类工作时可以反复使用的方法和步骤。</span></div></div>
  if (scene.id === 'research-crew') return <div className="model-visual model-visual-image agent-components-visual"><img className="model-image agent-components-image" src={`${import.meta.env.BASE_URL}images/page-08-agent-components.png`} alt="研究 Agent 工作台示意图，展示系统提示词、用户提示词、工具、MCP 和 Skill 五种组件" /></div>
  if (scene.id === 'agent') return <div className="agent-visual">
    <div className="agent-equation">
      <div className="agent-equation-box"><b>大语言模型</b><span>只能动嘴的聪明人</span></div>
      <strong>＋</strong>
      <div className="agent-equation-box agent-equation-tools"><b>办公桌和工具</b><span>电脑 · 网络 · 数据库 · 计算器</span></div>
      <strong>→</strong>
      <div className="agent-equation-box agent-equation-result"><b>Agent</b><span>围绕目标完成工作</span></div>
    </div>
    <div className="agent-loop-label">Agent 程序反复调用模型 API，把工具结果送回模型</div>
    <div className="agent-loop">
      <div className="agent-step active"><small>01</small><b>思考</b><span>需要哪些信息？</span></div>
      <div className="agent-step"><small>02</small><b>行动</b><span>搜索财报和历史数据</span></div>
      <div className="agent-step"><small>03</small><b>观察</b><span>发现数据仍然缺失</span></div>
      <div className="agent-step"><small>04</small><b>再行动</b><span>调用计算工具建模</span></div>
      <div className="agent-step"><small>05</small><b>检查</b><span>核对假设和结果</span></div>
      <div className="agent-step result"><small>06</small><b>完成</b><span>整理报告，必要时请人介入</span></div>
    </div>
  </div>
  if (scene.id === 'agent-comic') return <img className="agent-comic-image" src={agentComicImage} alt="Agent 怎样完成一项任务：LLM 操作员坐在 Harness 机架中，经历接到任务、思考、行动、观察、再行动与检查、完成或请人介入六个步骤" />
  if (scene.id === 'static-research-comic') return <img className="agent-comic-image" src={staticResearchImage} alt="机器人小队的四个工作站：资料收集、材料质检、封闭研究、可选的成果质检；封闭研究报告标注证据不足和不确定性" />
  if (scene.id === 'tool-context-budget-comic') return <img className="agent-comic-image" src={toolContextBudgetImage} alt="四格太阳朋克漫画：工具、MCP 和 Skill 过多会挤占 Agent 的工作上下文；r42 按任务声明加载刚刚够用的能力" />
  if (scene.id === 'chokepoint-workflow') return <figure className="chokepoint-workflow-figure"><img className="chokepoint-slide-image" src={chokepointWorkflowImage} alt="研究工厂流程图：官方资料和产品范围进入五条并行证据线，汇成参考供应链图；两条独立检验线分别评估节点风险和上市公司线索，最后形成报告" /><figcaption>流程示意图中的日期仅为画面示例；下一页报告的证据截止日为 2026-10-22。</figcaption></figure>
  if (scene.id === 'chokepoint-infographic') return <img className="chokepoint-slide-image" src={chokepointInfographicImage} alt="人形机器人产业链研究信息图：A 级优先跟踪、B 级次级线索、C 级已排除，以及不同交付状态与关键观察点；证据截至 2026 年 10 月 22 日" />
  if (scene.id === 'secjury-process-infographic') return <img className="chokepoint-slide-image" src={secjuryProcessImage} alt="SECJURY 研究流程信息图：从确认证券、收集证据、归一化财务数据、构建 DCF 估值、多视角质询到汇总研究报告" />
  if (scene.id === 'report-interpretation') return <div className="media-interpretation-visual" aria-label="把复杂研究报告转换成多媒体内容"><div className="media-source"><small>复杂研究报告</small><b>多 Agent 协作产出</b><span>信息密度高，术语多，读者需要反复回看</span></div><div className="media-arrow">转换成更容易进入的媒介 ↓</div><div className="media-outputs"><div><small>01</small><b>问答机器人</b><span>围绕报告追问重点</span></div><div><small>02</small><b>视频</b><span>用画面串起研究逻辑</span></div><div><small>03</small><b>播客节目</b><span>用对话讲清来龙去脉</span></div></div><p className="media-grounding">多媒体负责降低理解门槛，原始报告仍是核对证据和细节的依据。</p></div>
  if (scene.id === 'research-scope') return <div className="research-scope-visual" aria-label="智能体研究的价值与边界"><div className="scope-capabilities"><small>智能体能帮我们</small><div><span>快速阅读海量开放数据</span><i>→</i><span>提炼可追问的洞见</span><i>→</i><span>转成易懂的形式</span></div></div><div className="scope-observation-card"><div className="scope-observation-head"><span>ALTERNATIVE DATA / 另类数据</span><b>把研究镜头伸到公开文本之外</b></div><div className="scope-observation-grid"><div><strong>卫星影像</strong><span>拍摄企业工厂、港口和仓储区</span></div><div><strong>经营活动</strong><span>观察车辆、库存和生产线变化</span></div><div><strong>产量线索</strong><span>结合时间序列估计产能趋势</span></div><div><strong>业绩判断</strong><span>与财报和其他证据交叉核对</span></div></div><p>在华尔街，商业卫星影像等另类数据已被用于观察目标企业的生产与经营区域，辅助预测产量和业绩。</p></div><div className="scope-limits"><span>高质量数据可能在付费墙之后</span><span>开放数据仍有遗漏、偏差和时效问题</span><span>研究多 ≠ 买股票一定赚钱</span><b>初级探索：帮助理解更多，不保证全面</b></div></div>
  if (scene.id === 'worlds') return <img className="context-rot-image" src={contextRotImage} alt="上下文退化四格漫画：资料从少到多，单个机器人研究员逐渐漏看关键证据，偏离目标，推理变得不稳定" />
  if (scene.id === 'chokepoint') return <div className="case-flow" aria-label="产业链研究流程">
    <div className="case-flow-head"><strong>研究怎么走</strong><span>从公开资料到公司线索</span></div>
    <ol>
      <li><span className="case-step-number">01</span><div><b>建立来源基线，确定范围</b><p>先读官方文件，明确产品边界、研究对象和证据截止日。</p></div></li>
      <li><span className="case-step-number">02</span><div><b>五条证据线并行</b><p>分别查产品结构、制造测试、设备工装、材料耗材、认证集成。</p></div></li>
      <li><span className="case-step-number">03</span><div><b>画出参考供应链图</b><p>连接部件、工序与依赖，也保留尚未查清的缺口。</p></div></li>
      <li><span className="case-step-number">04</span><div><b>两条线独立核查</b><div className="case-flow-branches"><span>供应连续性风险：替代、产能、切换时间</span><span>上市公司线索：具体节点关系与供应能力</span></div></div></li>
      <li><span className="case-step-number">05</span><div><b>复核并交付报告</b><p>核对论断与原始来源，按下一轮研究优先级组织公司，保留待验证问题。</p></div></li>
    </ol>
  </div>
  if (scene.kind === 'case') return <div className="case-visual"><div className="case-grid"><span /><span /><span /><span /></div><div className="case-label">{scene.reportKey ? reports[scene.reportKey].eyebrow : 'RESEARCH OUTPUT'}</div><div className="case-route"><b>线索</b><i /><b>证据</b><i /><b>判断</b></div></div>
  if (scene.id === 'opening' || scene.id === 'map') return <div className="route-visual"><div className="route-ring ring-one" /><div className="route-ring ring-two" /><div className="route-line"><span>资料</span><i /><span>产业链</span><i /><span>判断</span></div></div>
  if (scene.id === 'model') return <div className="model-visual model-visual-image"><img className="model-image" src={`${import.meta.env.BASE_URL}images/model-completion.png`} alt="完形填空类比：模型根据上下文和概率选择下一个词" /></div>
  if (scene.id === 'finance-risk') return <div className="model-visual model-visual-image"><img className="model-image" src={`${import.meta.env.BASE_URL}images/finance-risk.png`} alt="金融研究中微小数据失真被不断放大，最终导致估值暴涨" /></div>
  if (scene.id === 'hallucination') return <div className="hallucination-visual">
    <div className="hallucination-example"><small>用户问题</small><p>某公司 2024 年收入是多少？</p><div className="hallucination-answer"><small>模型回答</small><p>根据该公司 2024 年年报，收入为 128.6 亿元。</p><span>听起来像事实，但可能没有对应年报或数字来源。</span></div></div>
    <div className="hallucination-cause"><b>为什么会出现？</b><span>训练资料不完整 / 相互冲突</span><span>当前上下文没有足够证据</span><span>模型仍然要把下一段话接下去</span></div>
    <div className="hallucination-rule"><strong>语言上合理</strong><i>≠</i><strong>事实已核验</strong></div>
  </div>
  if (scene.id === 'r42-boundary') return <div className="r42-workflow-visual">
    <div className="workflow-input"><span>研究任务</span><i>→</i><b>static_research</b></div>
    <div className="workflow-track">
      <section className="workflow-phase collect"><div className="workflow-phase-heading"><Search size={25} /><span>01</span></div><h2>资料收集</h2><small>Collection</small><p>规划信息需求，搜索并登记来源材料。</p><div className="workflow-permission">可接外部信息源</div></section>
      <div className="workflow-next" aria-hidden="true">→</div>
      <section className="workflow-phase gate"><div className="workflow-phase-heading"><ClipboardCheck size={25} /><span>02</span></div><h2>材料质检</h2><small>Collection QC</small><p>逐项检查材料能否满足预设信息需求。</p><div className="workflow-permission">可用轮次内继续收集</div></section>
      <div className="workflow-next" aria-hidden="true">→</div>
      <section className="workflow-phase research"><div className="workflow-phase-heading"><BrainCircuit size={25} /><span>03</span></div><h2>封闭研究</h2><small>Research</small><p>使用已登记材料分析、计算并写出报告。</p><div className="workflow-permission">不能退回收集；缺口标明未知</div></section>
      <div className="workflow-next" aria-hidden="true">→</div>
      <section className="workflow-phase gate final"><div className="workflow-phase-heading"><FileCheck2 size={25} /><span>04</span></div><h2>成果质检</h2><small>Final QC · 可选</small><p>核对报告论断与证据，发现问题后修订。</p><div className="workflow-permission">问题清零再交付</div></section>
    </div>
    <div className="workflow-loops"><div><span>↶ Collection QC：有剩余轮次时补收集</span></div><div><span>↶ Final QC：本站修订报告并复查</span></div></div>
    <div className="workflow-output"><FileText size={18} /><b>交付研究报告与产物</b><span>保留来源与未解决的信息缺口</span></div>
  </div>
  if (scene.id === 'gemini') return <div className="research-visual">
    <div className="research-step active"><small>01 / 拆解问题</small><b>制定计划</b><span>把宽泛的问题拆成需要查证的子问题，并确定研究路径。</span></div>
    <div className="research-step"><small>02 / 收集资料</small><b>反复查找</b><span>搜索网页、阅读相关材料，遇到新线索继续追查。</span></div>
    <div className="research-step"><small>03 / 形成认识</small><b>比较与综合</b><span>整理不同来源的说法，归纳事实、分歧和缺口。</span></div>
    <div className="research-step"><small>04 / 交付成果</small><b>生成报告</b><span>用结构化文字呈现研究结果，并附来源链接供读者核查。</span></div>
    <div className="research-grounding"><b>为什么可能减少幻觉？</b><div><span>外部资料减少凭空补全</span><span>多来源比较暴露矛盾</span><span>引用让读者追查依据</span></div><small>仍可能误读资料、引用不支持结论，或推理出错。</small></div>
  </div>
  if (scene.id === 'sources') {
    const examples = [
      { issue: '结论越界', claim: '新产线已使收入增长 30%。', source: '新产线预计投产后提升产能 30%。', check: '“预计”不等于已发生；“产能”也不等于收入。' },
      { issue: '时效过期', claim: '该公司目前市场份额为 35%。', source: '2021 年该公司市场份额为 35%。', check: '旧年份的数据，不能直接当作当前现状。' },
      { issue: '计算错误', claim: '营收从 100 增至 120，同比增长 30%。', source: '上年营收 100，本年营收 120。', check: '来源数字没错，但同比增幅应为 20%。' },
    ]
    return <div className="sources-visual"><p className="sources-disclaimer">以下均为虚构教学示例</p>{examples.map((example, index) => <section className="source-example" key={example.issue}>
      <div className="source-example-head"><span>{String(index + 1).padStart(2, '0')}</span><b>{example.issue}</b></div>
      <div className="source-example-comparison"><p><small>报告说</small>{example.claim}</p><p><small>来源写</small>{example.source}</p></div>
      <p className="source-example-check">核查发现：{example.check}</p>
    </section>)}</div>
  }
  return <div className="abstract-visual"><span>{String(scene.number).padStart(2, '0')}</span><i /></div>
}

function MapOverlay({ active, onClose, onSelect }: { active: Scene; onClose: () => void; onSelect: (index: number) => void }) {
  const [imageReady, setImageReady] = useState(false)
  useEffect(() => {
    const image = new window.Image()
    image.onload = () => setImageReady(true)
    image.onerror = () => setImageReady(false)
    image.src = atlasImage
  }, [atlasImage])
  return <div className="overlay map-overlay" role="dialog" aria-modal="true" aria-label="研究地图">
    <div className="atlas-canvas">
      <div className="atlas-backdrop" style={{ backgroundImage: `url(${atlasImage})` }} aria-hidden="true" />
      <div className="atlas-image-frame">
        {imageReady ? <img className="atlas-image" src={atlasImage} alt="太阳朋克港口研究地图" /> : <div className="atlas-fallback" />}
        {landmarks.map((landmark, index) => <button key={landmark.label} className={`atlas-landmark ${active.number >= scenes[landmark.index].number && active.number < (scenes[landmarks[index + 1]?.index]?.number ?? Infinity) ? 'selected' : ''}`} style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }} onClick={() => onSelect(landmark.index)} title={landmark.label} aria-label={`前往${landmark.label}`}><span>{String(scenes[landmark.index].number).padStart(2, '0')}</span><small>{landmark.label}</small></button>)}
      </div>
      <div className="map-atlas-head"><span>r42 / 研究地图</span><span>点击地点或从目录选择页面</span></div>
    </div>
    <aside className="map-directory">
      <div className="directory-head"><div><p>全景导航</p><h2>{scenes.length} 个取景点</h2></div><button className="close-button" onClick={onClose} title="关闭地图" aria-label="关闭地图"><X size={20} /></button></div>
      <div className="directory-list">
        {Object.entries(sectionLabels).map(([section, label]) => <section key={section}>
          <h3>{label}</h3>
          {scenes.map((scene, index) => scene.section === section && <button key={scene.id} className={active.id === scene.id ? 'selected' : ''} onClick={() => onSelect(index)}><span>{String(scene.number).padStart(2, '0')}</span>{scene.title}</button>)}
        </section>)}
      </div>
    </aside>
  </div>
}

function ReportViewer({ reportKey, onClose }: { reportKey: ReportKey; onClose: () => void }) {
  const report = reports[reportKey]
  const [markdown, setMarkdown] = useState<string | null>(null)
  const [imageExists, setImageExists] = useState(false)
  const [tab, setTab] = useState<'report' | 'image'>('report')

  useEffect(() => {
    let cancelled = false
    fetch(report.path).then((response) => response.ok ? response.text() : Promise.reject()).then((text) => { if (!cancelled) setMarkdown(text) }).catch(() => { if (!cancelled) setMarkdown(null) })
    const image = new window.Image()
    image.onload = () => { if (!cancelled) setImageExists(true) }
    image.onerror = () => { if (!cancelled) setImageExists(false) }
    image.src = report.imagePath
    return () => { cancelled = true }
  }, [report])

  return <div className="overlay report-overlay"><div className="report-head"><div><p className="kicker"><span className="kicker-dot" />{report.eyebrow}</p><h2>{report.label}</h2></div><div className="report-head-actions"><div className="report-tabs"><button className={tab === 'report' ? 'selected' : ''} onClick={() => setTab('report')}><BookOpen size={15} /> 报告</button><button className={tab === 'image' ? 'selected' : ''} onClick={() => setTab('image')}><Image size={15} /> 信息图</button></div><button className="close-button" onClick={onClose} title="关闭报告"><X size={20} /></button></div></div>
    {tab === 'report' && markdown ? <div className="markdown-report"><ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown></div> : tab === 'image' && imageExists ? <div className="image-report"><img src={report.imagePath} alt={`${report.label} 信息图`} /></div> : <div className="report-empty"><div className="report-icon">{tab === 'report' ? <BookOpen size={24} /> : <Image size={24} />}</div><h3>{tab === 'image' && markdown ? '信息图尚未提供' : '报告素材待导入'}</h3><p>{tab === 'image' && markdown ? <>当前已有 Markdown 报告，可切换到“报告”查看内容。</> : <>将预生成的 Markdown 和信息图放入 <code>public/reports/{reportKey}/</code> 后，这里会展示现场要放大的研究结果。</>}</p><p className="report-path">预期文件：{tab === 'report' ? report.path : report.imagePath}</p></div>}
  </div>
}

export { App }
