export type SceneKind = 'concept' | 'case' | 'transition' | 'qa'

export type Scene = {
  id: string
  number: number
  title: string
  kicker: string
  minutes: number
  kind: SceneKind
  section: 'understand' | 'boundary' | 'research' | 'close'
  summary: string
  statement: string
  accent: string
  tags: string[]
  reportKey?: ReportKey
}

export type ReportKey = 'chokepoint' | 'secjury'

export const reports: Record<ReportKey, { label: string; eyebrow: string; path: string; imagePath: string }> = {
  chokepoint: { label: '产业链', eyebrow: 'CHOKEPOINT', path: `${import.meta.env.BASE_URL}reports/chokepoint/report.md`, imagePath: `${import.meta.env.BASE_URL}images/chokepoint-infographic.png` },
  secjury: { label: '估值质询', eyebrow: 'SECJURY', path: `${import.meta.env.BASE_URL}reports/secjury/report.md`, imagePath: `${import.meta.env.BASE_URL}reports/secjury/overview.png` },
}

export const scenes: Scene[] = [
  { id: 'opening', number: 1, title: '风险提示', kicker: '金融研究型智能体探索', minutes: 1, kind: 'concept', section: 'understand', summary: '这不是投资建议，也不是经过验证的量化投资策略。', statement: '这是一项进行中的个人研究：对 AI 深度研究产品进行推演和扩展。投资有风险，入市需谨慎！', accent: 'coral', tags: ['个人研究', '未验证', '非投资建议'] },
  { id: 'model', number: 2, title: '大语言模型怎样回答', kicker: '先理解工具', minutes: 3, kind: 'concept', section: 'understand', summary: '它先把文字切成小片段，再像读者一样回看前后文，找出当前最相关的信息，逐步接出下一个词。', statement: '注意力机制像一束会移动的手电筒：它帮助模型照亮相关线索，却不会替它核对事实。', accent: 'mint', tags: ['Token', '注意力', '下一词概率', '生成'] },
  { id: 'hallucination', number: 3, title: '什么是幻觉', kicker: '先理解工具', minutes: 3, kind: 'concept', section: 'understand', summary: '模型的训练目标是把下一段话接得像，而不是给每个断言附上证据；遇到知识缺口时，它仍可能生成一段流畅的答案。', statement: '幻觉不是模型突然“想撒谎”，而是合理续写越过了证据边界。', accent: 'coral', tags: ['语言合理', '证据缺口', '流畅 ≠ 真实', '核查'] },
  { id: 'finance-risk', number: 4, title: '金融研究为什么更敏感', kicker: '先理解工具', minutes: 2, kind: 'concept', section: 'understand', summary: '日期、主体、单位、计算和预测，任何一个错位都可能改变结论。', statement: '金融研究的错误，往往不是一句话错，而是判断被悄悄推向了另一边。', accent: 'coral', tags: ['日期', '数字', '主体'] },
  { id: 'context-window', number: 5, title: '上下文不是无限的', kicker: '先理解工具', minutes: 2, kind: 'concept', section: 'understand', summary: '模型每次能带着看的内容有上限。问题、规则、报告和对话不断加入，就像给机器人不停喂字；装满后，前面的重要条件可能留不住。', statement: '它可能留下“收入增长 30%”，却漏掉“预计”“投产后”这两个关键条件。', accent: 'blue', tags: ['内容有上限', '资料越积越多', '条件可能漏掉'] },
  { id: 'context-compression', number: 6, title: '上下文压缩会发生什么', kicker: '先理解工具', minutes: 2, kind: 'concept', section: 'understand', summary: '当对话和材料太长，系统会把前面的内容整理成更短的摘要，让模型继续工作。', statement: '摘要保留了大意，却可能丢掉原句、例外条件、来源关系和“预计”这样的限定词。', accent: 'blue', tags: ['压缩', '摘要', '限定条件', '来源关系'] },
  { id: 'context-compression-infographic', number: 7, title: '上下文压缩：容量恢复了，但信息可能被简化', kicker: '先理解工具 / 视觉说明', minutes: 1, kind: 'concept', section: 'understand', summary: '这张图把压缩前接近上限的上下文、压缩过程、容量恢复和可能丢失的关键条件放在一起。', statement: '容量恢复不等于信息完整：摘要让模型继续工作，也可能让限定词和来源关系变得不可见。', accent: 'blue', tags: ['上下文容量', '压缩前', '压缩后', '信息损失'] },
  { id: 'prompt-stack', number: 8, title: '给模型配上工作装备', kicker: '先理解工具', minutes: 2, kind: 'concept', section: 'understand', summary: '系统提示词是长期工作制度，用户提示词是这次任务单；工具是运行环境里可直接调用的动作，MCP 通过标准接口接入本地或远程服务，Skill 则是一套可复用的操作手册。', statement: '它们不是五个同义词：一个管规矩，一个管任务，一个做动作，一个接外部世界，一个教完成一类工作。', accent: 'mint', tags: ['工作制度', '任务单', '本地动作', 'MCP 连接', 'Skill 方法'] },
  { id: 'research-crew', number: 9, title: '五种组件，各自负责什么', kicker: '把工作边界说清楚', minutes: 2, kind: 'concept', section: 'understand', summary: '系统提示词、用户提示词、工具、MCP 和 Skill 共同组成 Agent 的工作环境，但它们的优先级、生命周期和作用范围并不相同。', statement: '上下文变短时，系统提示词通常留在最上层；任务、动作、外部能力和工作方法，则由各自的机制承担。', accent: 'amber', tags: ['置顶制度', '一次性任务', '手边动作', '标准接口', '方法库'] },
  { id: 'agent', number: 10, title: '从模型到 Agent', kicker: '从回答到行动', minutes: 3, kind: 'concept', section: 'understand', summary: 'Agent 以大语言模型为大脑，能够使用工具、执行任务，并根据执行结果决定下一步行动。', statement: '以前我们让 AI 回答问题，现在我们让 AI 帮我们完成工作。', accent: 'mint', tags: ['模型 API', '工具调用', '思考—行动—观察', '人工介入'] },
  { id: 'agent-comic', number: 11, title: 'Agent 怎样完成一项任务', kicker: '六格漫画 / 一个工作循环', minutes: 2, kind: 'concept', section: 'understand', summary: 'LLM 操作员坐在 Harness 机架里，接到目标后反复思考、调用工具、观察结果，直到交付或请人介入。', statement: '模型决定下一步；Agent 程序执行；Harness 限定权限、预算和停止条件。', accent: 'amber', tags: ['LLM 操作员', '工具', '行动循环', 'Harness 边界'] },
  { id: 'gemini', number: 12, title: 'Gemini Deep Research', kicker: '一个熟悉的参照', minutes: 3, kind: 'concept', section: 'understand', summary: '这是 Gemini 的深度研究功能：给它一个较复杂的问题，它会组织研究步骤，查找并综合资料，生成一份附有来源链接的报告。', statement: '先找证据、再比较和写作，能减少只凭模型记忆编出答案的机会；但来源和推论仍需核查。', accent: 'violet', tags: ['研究计划', '多轮查找', '综合报告', '来源链接'] },
  { id: 'sources', number: 13, title: '有来源就可靠吗？', kicker: '来源也要接受核查', minutes: 2, kind: 'concept', section: 'understand', summary: '报告即使附了链接，也可能把预测写成事实、把旧数据写成现状，或者引用了数字却算错结果。', statement: '来源是检查的入口，不是正确性的印章。', accent: 'amber', tags: ['是否支持结论', '是否仍然有效', '数字能否复算'] },
  { id: 'why-build', number: 14, title: '为什么还要自己研发？', kicker: '从产品到研究基础设施', minutes: 2, kind: 'concept', section: 'boundary', summary: 'Gemini Deep Research 很适合通用开放式研究，但复杂金融研究往往需要更明确的工具、材料和流程控制。', statement: '我们希望指定工具和信息源，调用代码做高精度计算，并把多个研究管线连接成更大的流水线。', accent: 'violet', tags: ['工具', '数据源', '计算', '流水线'] },
  { id: 'single-agent', number: 15, title: '单智能体架构', kicker: '一种常见的 Agent 组织方式', minutes: 3, kind: 'concept', section: 'boundary', summary: '一个模型统筹整项任务：规划步骤、调用工具、读取反馈，并在同一段工作上下文里调整下一步。', statement: '它把规划、执行和反思连成一个循环；任务越长，对模型能力和上下文管理的要求越高。', accent: 'mint', tags: ['一个模型', '共享上下文', '工具反馈', '持续调整'] },
  { id: 'worlds', number: 16, title: 'Context Rot：上下文退化', kicker: '单智能体的长上下文难题', minutes: 2, kind: 'concept', section: 'boundary', summary: 'Chroma 的 Context Rot 研究显示，模型不会均匀使用上下文；输入变长、无关干扰变多时，检索和推理会变得更不可靠。', statement: '先收集有用材料，再保持研究上下文紧凑：少一点无关输出，少一点关键规则和证据被淹没的机会。', accent: 'mint', tags: ['Context Rot', '紧凑上下文', '干扰'] },
  { id: 'r42-boundary', number: 17, title: 'r42：分阶段完成研究', kicker: 'static_research 基础运行结构', minutes: 3, kind: 'concept', section: 'boundary', summary: '一项研究被拆成资料收集、材料质检、封闭研究和可选的成果质检。每个阶段有自己的任务与权限。', statement: '只有材料质检能决定继续收集；进入 Research 后，未解决的证据缺口必须写成不确定性，不能打回去补搜。', accent: 'blue', tags: ['Collection', '材料质检', 'Research', '成果质检'] },
  { id: 'static-research-comic', number: 18, title: '机器人小队的研究接力', kicker: 'static_research 四个工作站', minutes: 2, kind: 'concept', section: 'boundary', summary: '资料收集、材料质检、封闭研究和可选的成果质检，在不同工作站完成。', statement: 'Research 只依据已登记材料写作；证据不足时明确标注未知。', accent: 'blue', tags: ['资料收集', '材料质检', '封闭研究', '成果质检'] },
  { id: 'tool-context-budget-comic', number: 19, title: '工具太多，Agent 的上下文也会被吃掉', kicker: '工具 / 按声明加载刚刚够用的能力', minutes: 2, kind: 'concept', section: 'boundary', summary: '工具、MCP 和 Skill 都会进入 Agent 的工作上下文；配置过多时，无关能力会挤占真正用于理解任务、读取材料和行动的空间。', statement: 'r42 按任务声明加载刚刚够用的工具、MCP 或 Skill，把上下文留给真正的研究工作。', accent: 'amber', tags: ['工具预算', 'MCP', 'Skill', '按需加载'] },
  { id: 'map', number: 20, title: '今天分享的研究地图', kicker: '一个案例，一条研究路径', minutes: 1, kind: 'transition', section: 'research', summary: '以人形机器人产业链为例，看研究怎样从资料走向可核查的公司线索。', statement: '先理解流程与边界，再看它如何落到一份具体报告。', accent: 'amber', tags: ['产业链', '证据', '公司线索'] },
  { id: 'runtime', number: 21, title: '看一次 r42 运行', kicker: '现场演示', minutes: 1, kind: 'transition', section: 'research', summary: '现场展示启动和运行界面；完整报告已经提前生成。', statement: '运行很慢，但研究产物可以被反复阅读、检查和追问。', accent: 'blue', tags: ['运行', '报告'] },
  { id: 'chokepoint', number: 22, title: '产业链：定位公司', kicker: '案例 / 公司发现', minutes: 4, kind: 'case', section: 'research', summary: '从人形机器人产业链的关键节点，寻找值得下一轮核查的公司。', statement: '研究优先级不是股票评级；“未证明”也不是“没有风险”。', accent: 'coral', tags: ['人形机器人', 'A 股', '节点'], reportKey: 'chokepoint' },
  { id: 'chokepoint-workflow', number: 23, title: '产业链研究工厂：从材料到报告', kicker: '案例 / 研究流程', minutes: 2, kind: 'case', section: 'research', summary: '先建立官方来源基线、确定产品范围，再并行整理五条证据线，形成参考供应链图。', statement: '供应连续性风险和上市公司线索分别核查，最后汇成可追溯的公司优先研究报告。', accent: 'coral', tags: ['五条证据线', '独立核查', '可追溯报告'] },
  { id: 'secjury-intro', number: 24, title: 'SECJURY：给估值安排一场质询', kicker: '方法 / 研究型估值审查', minutes: 2, kind: 'concept', section: 'research', summary: 'SECJURY 把一次证券研究拆成可追溯的证据、可复算的估值模型和多种投资视角的独立质询。', statement: '它不是荐股器，也不是把陪审员票数当成真理；它的任务是找出结论依赖了哪些假设，以及哪些地方还不能下判断。', accent: 'amber', tags: ['证据', 'DCF', '多视角质询', '不确定性'], reportKey: 'secjury' },
  { id: 'secjury-process', number: 25, title: 'SECJURY：从身份核验到评审报告', kicker: '方法 / 一条封闭的研究流水线', minutes: 2, kind: 'concept', section: 'research', summary: '先确认研究对象，再登记和整理证据；模型冻结后交给不同角色反向检查，最后把数字、质疑和证据缺口合成报告。', statement: '研究阶段可以提出不同意见，但不能悄悄改掉输入；每个结论都要能回到材料、计算或明确标注的假设。', accent: 'amber', tags: ['身份', '材料', '归一化', '建模', '质询', '交付'], reportKey: 'secjury' },
  { id: 'secjury-process-infographic', number: 26, title: 'SECJURY 研究流程信息图', kicker: '方法 / 研究流程总览', minutes: 2, kind: 'concept', section: 'research', summary: '把 SECJURY 从身份核验、证据收集到估值质询和报告交付的完整链路放在一张图里。', statement: '每一步都留下可追溯的材料、计算和质疑，发现缺口就回到证据层补查。', accent: 'amber', tags: ['研究流程', '证据', '估值', '质询', '报告'] },
  { id: 'report-interpretation', number: 27, title: '让研究报告更容易被理解', kicker: '方法 / 降低复杂报告的理解门槛', minutes: 2, kind: 'concept', section: 'research', summary: '多 Agent 协作常常会产出结构复杂、信息密度很高的报告。除了继续压缩文字，也可以把同一份材料转换成更容易进入的问答、视频和播客。', statement: '先让读者听懂、看懂、问得到，再回到原报告核对证据和细节。', accent: 'violet', tags: ['多媒体', '问答机器人', '视频', '播客'] },
  { id: 'research-scope', number: 28, title: '研究仍然只是一次摸象', kicker: '结语 / 从更多洞见到更完整的理解', minutes: 2, kind: 'concept', section: 'research', summary: '以上只是众多研究尝试中的一部分。智能体可以快速帮助人类阅读海量开放数据，把洞见转成更容易理解的形式，但这仍处在初级探索阶段。', statement: '研究得更多，不等于买股票一定赚钱；我们仍是摸象的盲人，只是比以前多摸到了一些部位。', accent: 'coral', tags: ['开放数据', '初级探索', '数据缺口', '不保证收益', '不完整'] },
  { id: 'qa', number: 29, title: '问答', kicker: '回到研究地图', minutes: 5, kind: 'qa', section: 'close', summary: '从任一概念或报告继续展开。', statement: '问题从哪里开始，镜头就回到哪里。', accent: 'blue', tags: ['Q&A'] },
]

export const sectionLabels = {
  understand: '理解 AI',
  boundary: '建立边界',
  research: '产业链案例',
  close: '问答',
} as const
