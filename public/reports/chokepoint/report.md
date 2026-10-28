# 人形机器人产业链供应连续性风险节点 · A 股公司研究优先级报告

- 证据截点：2026-10-22。
- 输入性质：对已校验上游 `scope.json` / `supply-chain.json` / 六个 `claims.json` / 30 份 `company-priorities.json` / 8 份 `node-assessment.json` 的封闭式综合，不新增事实、不新增来源。
- 文中 A / B / C 为公司映射任务给出的 `research_priority` 字段原值，**不是**评级、评分或收益预测；本文件不含报告级判断、评分、投资评级与推荐。
- 每个实质子句后括注**一条**原始原子 claim ID。同一证券主体跨多个节点被映射时，合并为一条记录，但逐个节点保留其独立证据。

---

## 1. 证据状态口径（五档，不可互相替代）

1. **可量产交付**：斯菱智驱减速器专用轴承已达可量产产品状态并投产（`prioritize_companies_8-siling-mass-production-status`）。
2. **小批量供货**：福莱新材触觉产品已实现批量交付并自述具备稳定供应能力（`prioritize_companies_14-fl-tactile-batch`）。
3. **送样验证**：汉威科技 IMU 已送样并取得少量订单，六轴 IMU 仍在研发（`prioritize_companies_15-hanwei-imu-sample-small-orders`）。
4. **技术储备**：弘信电子仅将"电子皮肤"列为行业趋势与未来重点布局方向（`prioritize_companies_14-hx-eskin-strategy`）。
5. **规划产能**：双林股份行星滚柱丝杠规划产能 10 万套、计划 2026-06 落地（`prioritize_companies_6-sl-300100-capacity-10w`），而其 2025 年实际产出为 1,500 套（`prioritize_companies_6-sl-300100-output-2025`）。

**同一主体的状态会随时间迁移，须按时间点分别记录**：双林股份 2025-12-31（2025 年年度报告摘要口径）尚未获得正式定点（`prioritize_companies_6-sl-300100-no-designation-2025`），2026-08 已取得部分头部客户定点但仍处送样验证阶段（`prioritize_companies_6-sl-300100-designation-2026`）。

---

## 2. A 级：优先继续研究的证券主体（跨节点已合并）

### 2.1 双林股份（300100）｜映射节点：直线关节模组/执行器、行星滚柱丝杠、手指微型传动

- 丝杠口径：2025 年实际产出 1,500 套（`prioritize_companies_6-sl-300100-output-2025`），规划产能 10 万套、计划 2026-06 落地（`prioritize_companies_6-sl-300100-capacity-10w`），产能与产出落差未披露爬坡曲线（`prioritize_companies_6-sl-300100-smallbatch-conversion`）。
- 定点口径：2025-12-31（2025 年年度报告摘要口径）尚未获得正式定点（`prioritize_companies_6-sl-300100-no-designation-2025`），2026-08 已取得部分头部客户定点（`prioritize_companies_6-sl-300100-designation-2026`）。
- 关节模组：具备直线关节模组能力并自建磨削设备集成（`prioritize_companies_1-sl-module-capability`、`prioritize_companies_1-sl-equipment-integration`）。
- 收入体量：人形机器人相关收入占比仍小（`prioritize_companies_6-sl-300100-revenue-small`）。
- 手指微型传动：微型丝杠已有样品与精度口径（`prioritize_companies_7-SL-MICRO-SPEC`、`prioritize_companies_7-SL-C3-PRECISION`），已建手指模组产线（`prioritize_companies_7-SL-FINGER-MODULE-LINE`），但尚未形成规模（`prioritize_companies_7-SL-NOT-YET-SCALE`）。
- 海外线索：取得海外丝杠订单（`prioritize_companies_6-sl-300100-foreign-screw-orders`）。
- 最大未知：规划产能到实际良率与爬坡节奏均未披露（`prioritize_companies_6-sl-300100-smallbatch-conversion`）。

### 2.2 震裕科技（300953）｜映射节点：直线执行器、行星滚柱丝杠、手指微型传动

- 产品口径：反向式行星滚柱丝杠峰值推力 100–12000 N、导程精度 C3/C5，处于 SOP 验证（`prioritize_companies_6-zy-300953-spec-sop`）。
- 客户口径："国内外多个头部人形机器人本体客户验证并小批量供货"（`prioritize_companies_6-zy-300953-domestic-smallbatch`、`prioritize_companies_7-ZY-SMALLBATCH-ORDERS`）。
- 产能口径：56 万套为达产规划口径（`prioritize_companies_6-zy-300953-560k-ramp`），微型丝杠另有 64 万套规划（`prioritize_companies_7-ZY-64W-PLAN`）。
- 收入口径：人形机器人收入约占 0.15%（`prioritize_companies_7-ZY-REV-SHARE-015`）。
- 供应链侧线索：海外进口审查构成替代窗口（`prioritize_companies_6-zy-300953-overseas-import-review`）。
- 最大未知：56 万套规划产能的实际爬坡与良率未披露（`prioritize_companies_6-zy-300953-560k-ramp`）。

### 2.3 雷赛智能（002979）｜映射节点：旋转关节模组、灵巧手、空心杯电机、伺服驱动器

- 关节模组：具备模组集成能力，命名型号为 PJ3/HJ2（`prioritize_companies_0-ls-module-integration`、`prioritize_companies_0-ls-pj3-hj2`）。
- 自制边界：谐波减速器明确外购、不自主开发（`prioritize_companies_0-ls-harmonic-outsourced`）。
- 关节批量：关节已进入批量（`prioritize_companies_0-ls-joint-batch`），但人形专用型号划分不清（`prioritize_companies_0-ls-humanoid-dedicated`）。
- 客户：约近百家机器人客户，均未具名（`prioritize_companies_9-leisai-h1-near100-customers`、`prioritize_companies_2-ls-customer-coverage-unnamed`）。
- 供应体系：称机器人核心部件已进入国内 80% 主流人形机器人厂商的供应体系（`prioritize_companies_10-leisai-robot-80pct-supply-system`）。
- 灵巧手：21 自由度手已批量供货（`prioritize_companies_2-ls-21dof-hand-batch-supply`），但"批量"与"小批量"表述在同一材料内存在矛盾（`prioritize_companies_2-ls-batch-vs-smallbatch-contradiction`）。
- 灵巧手路线：连杆方案定位走量（`prioritize_companies_2-ls-linkage-route-mass-market`），高自由度直驱仍在研（`prioritize_companies_2-ls-highdof-direct-drive-in-dev`），腱绳路线表述需谨慎（`prioritize_companies_2-ls-tendon-route-caution`）。
- 明确否定项：未通过特斯拉认证（`prioritize_companies_2-ls-tesla-not-qualified`）。
- 空心杯电机：产品谱系齐（`prioritize_companies_10-leisai-coreless-series`），但订单小、收入小（`prioritize_companies_10-leisai-coreless-orders-small-revenue`）。
- 驱动器：具备 SIL 3 能力（`prioritize_companies_11-leisai-rm-sil3`），STO 认证尚待完成（`prioritize_companies_11-leisai-sto-pending`）。
- 驱动器歧义：CD 系列驱动器口径存疑（`prioritize_companies_11-leisai-cd-drive-ambiguity`）。
- 最大未知：人形机器人收入未单独拆分（`prioritize_companies_9-leisai-robot-rev-share`）。

### 2.4 鸣志电器（603728）｜映射节点：旋转关节模组、灵巧手、空心杯电机、伺服驱动器

- 关节模组：具备批量能力（`prioritize_companies_0-moons-batch-capability`、`prioritize_companies_0-moons-batch-orders`），但官网无目录型号（`prioritize_companies_0-moons-no-catalog-model`）。
- 规模切换：正从送样阶段切换到规模交付（`prioritize_companies_0-moons-scale-transition`）。
- 空心杯：全栈产品已批量（`prioritize_companies_10-moons-coreless-fullstack-batch`），百余家客户送样、部分转批量（`prioritize_companies_10-moons-100plus-sampling-some-batch`）。
- 灵巧手：手部核心件布局以空心杯为切入（`prioritize_companies_2-mz-hand-coreless-layout`），供货范围为手的组成件而非整手（`prioritize_companies_2-mz-hand-scope-components`）。
- 安全认证：M56S 通过 UL61800-5-2 / IEC61508 SIL 3 / ISO 13849-1 PL e（`prioritize_companies_11-moons-m56s-safety`）。
- 最大未知：人形机器人收入未单独披露，半导体与机器人合并口径约 2 亿（`prioritize_companies_10-moons-semiconductor-robot-revenue-200m-combined`）。

### 2.5 兆威机电（003021）｜映射节点：灵巧手、行星减速器

- 灵巧手产品矩阵：A17 / B21 / B06 / C06 多型号（`prioritize_companies_2-zw-hand-product-matrix`），B20 规格已披露（`prioritize_companies_2-zw-b20-spec`）。
- 传动路线：高自由度走全直驱，低自由度走连杆欠驱动（`prioritize_companies_5-zhaowei-self-gears`）。
- 独立产品项：灵巧手核心驱动模组作为独立产品行（`prioritize_companies_2-zw-hand-core-drive-module`）。
- 商业化表述：量产口径用语需按"商业化表述"解读（`prioritize_companies_2-zw-commercialization-wording`）。
- 缺失项：无整手出货量与客户（`prioritize_companies_2-zw-hand-no-volume-or-customer`），2026H1 收入未拆机器人分部（`prioritize_companies_2-zw-h1-revenue-no-robot-segment`）。
- 产能口径：8 亿产业园仅为投资口径（`prioritize_companies_2-zw-park-8e8-investment`）。
- 行星减速器：人形模块实际指向手部而非行星关节（`prioritize_companies_5-zhaowei-humanoid-module-is-hand`），行星在具身侧的应用仍待确认（`prioritize_companies_5-zhaowei-planetary-embodied`）。

### 2.6 绿的谐波（688017）｜映射节点：谐波减速器

- 产量：2025 年 43.37 万台（`primary_source_baseline-harmonic-2025-volume`）。
- 收入：谐波分产品收入 4.76 亿元、约占 83%（`prioritize_companies_3-hd-lvde-harmonic-product-revenue`）。
- 产能：50 万台/年名义产能已达产（`prioritize_companies_3-hd-lvde-500k-capacity`），并有扩产计划（`primary_source_baseline-harmonic-capacity-expansion`）。
- 利用率：问询回复披露 2023 / 2024 / 2025 年产能利用率 51.59% / 42.67% / 67.76%（`primary_source_baseline-harmonic-utilization`）；2025 年年报仅以定性表述描述产能与良率状态（`prioritize_companies_3-hd-lvde-utilization-qualitative`）。
- 良率：量化良率与分型号良率均未披露（`primary_source_baseline-harmonic-yield-undisclosed`）。
- 客户集中度：客户结构集中（`prioritize_companies_3-hd-lvde-customer-concentration`）。
- 具身定位：自述为具身智能整机厂核心供应商（`prioritize_companies_3-hd-lvde-embodied-standing`），微型谐波持续迭代（`prioritize_companies_3-hd-lvde-micro-harmonic-iteration`）。
- 外资交期：仅有"较长"的定性表述（`primary_source_baseline-harmonic-foreign-leadtime`）；唯一可核验的设备排产周期为 12–24 个月（`graph_track_4-qi4-lvde-grinder-12-24mo`）。
- 全球位次：全球谐波第二（`graph_track_4-qi4-lvde-harmonic-global-2nd`）；行业集中度高（`prioritize_companies_3-hd-mckinsey-concentration`）。

### 2.7 双环传动（002472）／环动科技｜映射节点：RV 减速器

- 主体状态：环动科技为双环传动控股子公司，双环传动董事会已于 2026-09-03 决议终止分拆至科创板上市并撤回相关上市申请文件，截点尚未成为独立 A 股上市公司（`prioritize_companies_4-hd-not-separately-listed`），故不能按独立证券计量。
- 产能与产量：2025 年产能 137,616 台、产量 148,820 台、利用率 108.14%（`prioritize_companies_4-hd-capacity-output`），利用率构成瓶颈（`prioritize_companies_4-hd-utilization-bottleneck`）。
- 份额：国内市占 24.98%（`prioritize_companies_4-hd-market-share`）。
- 收入结构：RV 收入 4.03 亿元、占环动主营 92.28%（`prioritize_companies_4-hd-rv-revenue-share`）。
- 客户集中度：已披露集中度（`prioritize_companies_4-hd-customer-concentration`）。
- 人形适用性：人形机器人专用型号仍在研发（`prioritize_companies_4-hd-humanoid-rd-only`）；RV 在人形髋/肩重载位的直接装机证据未取得，现有披露多为工业机器人口径（`prioritize_companies_4-rv-heavy-load-position-reported`）。
- 标准参与：参与标准起草（`prioritize_companies_4-hd-standard-drafting`）。
- 最大未知：人形机器人能否成为 RV 增量需求，尚无装机证据（`prioritize_companies_4-hd-humanoid-rd-only`）。

### 2.8 斯菱智驱（301550）｜映射节点：机器人专用轴承、谐波减速器

- 交付状态：减速器专用轴承为可量产产品并已投产（`prioritize_companies_8-siling-mass-production-status`、`prioritize_companies_8-siling-production-start`）。
- 产能规划：机器人零部件规划 360 万套（`prioritize_companies_3-sl-planned-360`）。
- 项目状态：技改项目仍在建，达产推迟至 2027-09（`prioritize_companies_8-siling-robot-project-under-construction`、`prioritize_companies_3-sl-retrofit-2027`），当前为部分投产（`prioritize_companies_3-sl-retrofit-partial-production`）。
- 谐波口径：谐波已投产（`prioritize_companies_3-sl-harmonic-in-production`），泰国谐波产线（`prioritize_companies_8-siling-thailand-harmonic-line`）。
- 最大未知：360 万套规划产能与 2027-09 达产之间的爬坡未披露（`prioritize_companies_8-siling-robot-project-under-construction`）。

### 2.9 五洲新春（603667）｜映射节点：机器人专用轴承、手指微型传动

- 客户：已配套深圳德镁、纽氏达特、中大力德、极亚精机、南通振康（`prioritize_companies_8-wuzhou-robot-bearing-series-customers`）。
- 轴承产能：募投机器人专用轴承 7 万组（`prioritize_companies_8-wuzhou-fundraise-robot-bearing-capacity`），建设期已披露（`prioritize_companies_8-wuzhou-fundraise-build-period`）。
- 微型丝杠：募投 210 万套/年微型滚珠丝杠（`prioritize_companies_7-WZ-210W-PLAN`），服务灵巧手（`prioritize_companies_7-WZ-SERVE-HAND`），客户验证中（`prioritize_companies_7-WZ-VALIDATION`）。
- 收入：机器人相关收入约 2,000 万元级（`prioritize_companies_7-WZ-ROBOT-REV-20M`）。
- 最大未知：210 万套微型丝杠的爬坡与良率未披露（`prioritize_companies_7-WZ-210W-PLAN`）。

### 2.10 步科股份（688160）｜映射节点：无框力矩电机、伺服驱动器

- 产品谱系：FMK 25–115 mm 全系列无框（`prioritize_companies_9-kinco-fmk-product-line`），2025 年报已列人形系列（`prioritize_companies_9-kinco-fmk-humanoid-series-ar2025`）。
- 验证状态：客户验证持续进行中（`prioritize_companies_9-kinco-fmk-verification-ongoing`）。
- 出货：2026H1 无框出货口径 11.36 万台（`prioritize_companies_9-kinco-fmk-shipments-2026h1`）。
- 一致性：一致性主张为自述（`prioritize_companies_9-kinco-fmk-consistency-claim`）。
- 产能：产能紧张（`prioritize_companies_9-kinco-capacity-tight`），二期 2027 年投产（`prioritize_companies_9-kinco-capacity-phase2-2027`）。
- 收入：机器人行业收入 2025 年 3.71 亿元（`prioritize_companies_9-kinco-robot-revenue-2025`），2026H1 为 2.43 亿元（`prioritize_companies_9-kinco-robot-revenue-2026h1`）。
- 驱动器：全系列旋转/直线关节平台（`prioritize_companies_11-kinco-humanoid-platform`），FD1X5S 具备 STO（`prioritize_companies_11-kinco-fd1x5s-sto`），自研中空驱动器 20 mm（`prioritize_companies_11-kinco-rd-hollow-20mm`）。
- 最大未知：机器人行业收入未进一步区分人形与工业（`prioritize_companies_9-kinco-robot-revenue-share-h1`）。

### 2.11 昊志机电（300503）｜映射节点：关节编码器、无框力矩电机、旋转关节模组

- 自制边界：谐波减速器自主开发（与雷赛外购形成对照）（`prioritize_companies_9-haozhi-self-developed`）。
- 编码器：HTC-N 精度 ±20″ / ±10″、26 bit（`prioritize_companies_12-haozhi-htc-n-spec`），绝对式编码器系列已成型（`prioritize_companies_12-haozhi-absolute-encoder-series`）。
- 明确否定项：人形机器人无销售、无协议（`prioritize_companies_12-haozhi-humanoid-no-sales-no-agreement`、`prioritize_companies_9-haozhi-no-humanoid-sales`）。
- 明确否定项：与特斯拉无关系（`prioritize_companies_9-haozhi-no-tesla`）；宇树业务不属人形（`prioritize_companies_9-haozhi-unitree-not-humanoid`）。
- 收入：机器人核心部件收入 1,725.91 万元、占 1.48%（`prioritize_companies_12-haozhi-robot-parts-revenue-h1-2025`）。
- 无框电机：可适用于人形但无实际人形销售（`prioritize_companies_9-haozhi-frameless-humanoid-applicable`）。
- 旋转关节：关节工作台与关节技术已披露（`prioritize_companies_0-hz-joint-table`、`prioritize_companies_0-hz-joint-tech`），谐波客户已具名（`prioritize_companies_0-hz-harmonic-customers`）。
- 最大未知：编码器虽指标达标，但人形定点为零（`prioritize_companies_12-haozhi-humanoid-no-sales-no-agreement`）。

### 2.12 奥普光电（002338）｜映射节点：关节编码器

- 主体：编码器业务由禹衡光学承载，2025 年营收 1.689 亿元、净利 1,394.7 万元（`prioritize_companies_12-aoppu-yuheng-encoder-entity`）。
- 精度：±1″、29 bit（`prioritize_companies_12-yuheng-encoder-precision-29bit`）。
- **关键否定项**：明确"暂未形成批量销售"（`prioritize_companies_12-yuheng-humanoid-no-batch-sales`）。
- 历史口径：2023 年"没有在人形机器人上直接做配套"（`prioritize_companies_12-yuheng-no-direct-humanoid-oem-2023`）。
- 最大未知：A 股编码器主体的高端份额与定点状态仍未披露，高端供给集中于海德汉、雷尼绍等国际品牌（`prioritize_companies_12-aoppu-high-end-encoder-foreign-share`）；禹衡光学本身亦明确暂未形成批量销售（`prioritize_companies_12-yuheng-humanoid-no-batch-sales`）。

### 2.13 柯力传感（603662）｜映射节点：六维力/关节力矩传感器

- 出货：2025 年机器人力学传感器 >1,500 只（`primary_source_baseline-keli-force-sensor-volume`）；2026H1 累计 >2,000 只，自 2026-04 起月订单量持续突破千只（`prioritize_companies_13-keli-h1-2026-volume`）。
- 品类：六维力/力矩 + 关节力矩（`graph_track_3-ps3-keli-6axis-spec`）。
- 客户：向开普勒人形机器人及 AI 理疗机器人客户的机器人力学传感器产品实现数百台批量出货（`prioritize_companies_13-keli-2025-batch-ship`）。
- 交付阶段：仍有多数客户处于送样（`graph_track_3-ps3-keli-sampling-stage`）。
- 竞争格局：高端六维力仍由国际厂商主导（`primary_source_baseline-keli-foreign-dominance`），ATI 领先（`graph_track_3-ps3-ati-overseas-lead`）。
- 产能：未披露（`prioritize_companies_13-keli-capacity-undisclosed`）。
- 间接线索：与小鹏存在间接关系（`prioritize_companies_13-keli-xpeng-indirect`）。
- 价格与替代：国内外价差与替代时间表已记录（`prioritize_companies_13-mkt-price-gap-foreign-domestic`、`prioritize_companies_13-mkt-import-substitution-timeline`）。

### 2.14 汉威科技（300007）｜映射节点：触觉/电子皮肤、IMU、六维力

- 触觉：具备电子皮肤能力（`prioritize_companies_14-hw-capability`），已小批量（`prioritize_companies_14-hw-smallbatch`）。
- 产能：已披露产能（`prioritize_companies_14-hw-capacity`）。
- 纳米传感器：已有产线与产品（`prioritize_companies_14-hw-nanosensor`、`prioritize_companies_14-hw-nanosensor-line`）。
- 分类边界：产品组合需按品类区分（`prioritize_companies_14-hw-portfolio`），下一代产品在研（`prioritize_companies_14-hw-nextgen-pipeline`）。
- IMU：送样 + 少量订单（`prioritize_companies_15-hanwei-imu-sample-small-orders`），试用中（`prioritize_companies_15-hanwei-imu-trial`），HAU925 规格已披露（`prioritize_companies_15-hanwei-hau925-specs`）。
- 六维力：产品已上市（`prioritize_companies_13-hanwei-sixaxis-product-listed`），应变片仍在送样（`prioritize_companies_13-hanwei-strain-gauge-sampling`）。
- 收入：机器人相关收入仍小（`prioritize_companies_15-hanwei-robot-revenue-small`）。
- 最大未知：织物电子皮肤仅初版样机、硅胶电子皮肤处于设计阶段（`prioritize_companies_14-hw-nextgen-pipeline`）。

### 2.15 福莱新材（605488）｜映射节点：触觉/电子皮肤

- 交付状态：已实现批量交付并自述具备稳定供应能力（`prioritize_companies_14-fl-tactile-batch`）。
- 客户：与灵心巧手签有协议（`prioritize_companies_14-fl-lingxin-agreement`），与中科硅纪有合作（`prioritize_companies_14-fl-zhongke-guiji`）。
- 量化口径：灵心巧手与中科硅纪的用量为媒体口径（`prioritize_companies_14-fl-lingxin-volumes`、`prioritize_companies_14-fl-zhongke-ubtech-volumes`）。
- 节点归因：与触觉节点的连接强度需按 node-link 口径计（`prioritize_companies_14-fl-node-link`）。
- 最大未知：触觉收入未单独披露，仅有集团营收口径（`prioritize_companies_14-fl-group-revenue`）。

### 2.16 华依科技（688071）｜映射节点：IMU

- 交付状态：人形机器人 IMU 已小批量（`prioritize_companies_15-huayi-humanoid-imu-small-batch`）。
- 规格：ARU8910 规格已披露（`prioritize_companies_15-huayi-aru8910-specs`）。
- 头部客户：ARU8010 已有头部客户（`prioritize_companies_15-huayi-aru8010-head-customer`）。
- 体系：通过 ISO 26262（`prioritize_companies_15-huayi-cert-iso26262`），并参与团体标准（`prioritize_companies_15-huayi-group-standard`）。
- 早期布局：早早控制为其早期布局（`prioritize_companies_15-huayi-zaozao-control`），收入体量已披露（`prioritize_companies_15-huayi-zaozao-revenue`）。
- 最大未知：小批量之后的规模化节奏未披露（`prioritize_companies_15-huayi-humanoid-imu-small-batch`）。

### 2.17 瑞芯微（603893）｜映射节点：计算与控制单元

- 算力：6 TOPS NPU（`prioritize_companies_16-rk3588-npu`）。
- 客户：2025 年报具名宇树、智元为长期客户（`prioritize_companies_16-rk-ar-customers`）。
- 人形确认：2025-12-05 投资者关系确认 RK3588 与宇树在人形上合作（`prioritize_companies_16-rk-humanoid-wide`）。
- 产品：人形适用产品线已列（`prioritize_companies_16-rk-products-humanoid`），小脑/协处理器定位（`prioritize_companies_16-rk-xiaonao`、`prioritize_companies_16-rk-brain-coprocessor`）。
- 份额与体量：机器人占比已披露（`prioritize_companies_16-rk-robot-share`），2025 年营收（`prioritize_companies_16-rk-rev-2025`），AP 结构（`prioritize_companies_16-rk-ap-mix`）。
- 最大未知：整机厂算力模组多为多品牌可选，具体芯片份额未具名（`prioritize_companies_16-infer-rk-materiality`）。

### 2.18 长盈精密（300115）｜映射节点：整机结构件与机身骨架、线束与连接器

- 品类：骨骼结构件（`prioritize_companies_17-ns-cy-bone-struct`）。
- 件数：2025 年约 69 万件（`prioritize_companies_17-ns-cy-69w`），2026 年 1–8 月超 110 万件（`prioritize_companies_17-ns-cy-110w-ytd`）。
- 收入：2025 年人形机器人业务 1 亿元（`prioritize_companies_17-ns-cy-rev-1e8`），分部收入已披露（`prioritize_companies_17-ns-cy-seg-rev`）。
- 能力跨度：结构件延伸至整机组装（`prioritize_companies_17-ns-cy-fullchain`）。
- 产能：单厂 6 万（`prioritize_companies_17-ns-cy-plant-6w`），工艺集已披露（`prioritize_companies_17-ns-cy-process-set`），材料体系（`prioritize_companies_17-ns-cy-materials`）。
- 线束：具备线束/连接器交付（`prioritize_companies_18-cy-delivery`），但线束范围未明确（`prioritize_companies_18-cy-harness-not-specified`），线束边界已界定（`prioritize_companies_18-cy-harness-scope`），人形收入口径（`prioritize_companies_18-cy-humanoid-rev`）。
- 最大未知：单机价值量与客户结构未披露（`prioritize_companies_17-ns-inf-value-opaque`）。

### 2.19 徕木股份（603633）｜映射节点：线束与连接器

- 状态：机器人用连接器+线束已获客户定点与认证，部分量产（`prioritize_companies_18-lm-2026h1-status`）。
- 收入：机器人收入已披露（`prioritize_companies_18-lm-robot-revenue`），集团营收口径（`prioritize_companies_18-lm-total-revenue`）。
- 客户：客户已披露（`prioritize_companies_18-lm-customers`）。
- 未拆分：机器人分部未拆分（`prioritize_companies_18-lm-no-split`）。
- 瓶颈：瓶颈判断为合理性推断（`prioritize_companies_18-lm-bottleneck-plausible`）。

### 2.20 凯旺科技（301182）｜映射节点：线束与连接器

- 客户与时长：为宇树供货已超两年（`prioritize_companies_18-kw-unitree`）。
- 批量：已批量交付（`prioritize_companies_18-kw-batch-delivery`）。
- 占比：占营收 <1%（`prioritize_companies_18-har-small-share`）。
- 最大未知：人形机器人供货部分不可分离（`prioritize_companies_18-kw-humanoid-unknown`）。

### 2.21 中研股份（688716）｜映射节点：PEEK 树脂、DFBP

- **关键否定项**：明确不具备人形机器人零部件能力，仅为材料供应商（`prioritize_companies_19-zy-noparts-capability`）。
- 产能与销量：设计产能 1,000 吨，2025 年销量 1,079.84 吨（`prioritize_companies_19-zy-sales`），利用率 102.43%（`prioritize_companies_19-zy-capacity-util`），基地产能（`prioritize_companies_19-zy-site-capacity`）。
- 行业位次：已披露（`prioritize_companies_19-zy-rank`），客户集中度已披露（`prioritize_companies_19-zy-ar-concentration`）。
- 人形相关：有人形研发（`prioritize_companies_19-zy-humanoid-rnd`、`prioritize_companies_19-zy-halfyear-rnd`），但无人形订单（`prioritize_companies_19-zy-no-humanoid-orders`）。
- DFBP 侧：中研在 DFBP 节点为**买方而非供方**（`prioritize_companies_20-zhongyan-buyer-not-supplier`），2,000 吨为规划（`prioritize_companies_20-zhongyan-2000t-plan`），尚在前期审批（`prioritize_companies_20-zhongyan-preconstruction-approval`）。
- 最大未知：PEEK 牌号在人形零部件的认证进度未披露（`prioritize_companies_19-zy-no-humanoid-orders`）。

### 2.22 新瀚新材（301076）｜映射节点：DFBP

- 全球格局：与兴福新材合计约 55% 全球产能（`prioritize_companies_20-dfbp-global-capacity-55`）。
- 客户：供货世索科、威格斯、赢创、中研股份（`prioritize_companies_20-xihan-customer-set`），为全球前二供应商（`prioritize_companies_20-xihan-top2-suppliers`）。
- 产能：5,000 吨/年（`prioritize_companies_20-xihan-5000t-split`），新增 2,500 吨已验证批量供货（`prioritize_companies_20-xihan-2500t-qualified-batch`）。
- **结构性要点**：5,000 吨扩产全部转自用，外售窗口仅在爬坡过渡期（`prioritize_companies_20-xihan-5000t-all-captive`）。
- 商用供给收窄：外售供给收窄（`prioritize_companies_20-dfbp-merchant-supply-narrowing`）。
- 纯度为门槛：99% 纯度规格（`prioritize_companies_20-dfbp-purity-spec-99`），纯度是准入闸口（`prioritize_companies_20-dfbp-role-purity-gate`）。
- 爬坡风险：前期爬坡存在风险（`prioritize_companies_20-xihan-prior-ramp-risk`），DFBP 收入已披露（`prioritize_companies_20-xihan-dfbp-revenue-2025`）。

### 2.23 金力永磁（300748）｜映射节点：稀土永磁

- 定点：2026H1 已获具身机器人电机转子定点（`prioritize_companies_21-jinli-designation-rotor`）。
- 配套投入：约 2 亿元，转子自动化产线为微米级（`prioritize_companies_21-jinli-rotor-line-capex`）。
- 小批量交付：2025 年报对"国际知名科技公司"小批量交付（`prioritize_companies_21-jinli-small-batch-delivery`）。
- 产能：磁材 4 万吨/年，利用率 >90%（`prioritize_companies_21-jinli-capacity-utilization`），包头三期（`prioritize_companies_21-jinli-baotou-phase3`）。
- 工艺：晶界渗透占比约 90%（`prioritize_companies_21-jinli-gbd-share`）。
- 认证周期：仅有定性表述（`prioritize_companies_21-jinli-cert-cycle-qualitative`）。
- 收入：机器人分部收入已披露（`prioritize_companies_21-jinli-robot-segment-revenue`）。
- 最大未知：客户未具名，人形用量无法交叉验证（`prioritize_companies_21-jinli-small-batch-delivery`）。

### 2.24 正海磁材（300224）｜映射节点：稀土永磁、空心杯电机

- 人形配套：2025 年报多家客户小批量人形空心杯/无框电机配套磁材（`prioritize_companies_21-zhenghai-small-batch-supply`）。
- 2026-09：对全球知名人形客户订单有序量产，但自认贡献有限（`prioritize_companies_21-zhenghai-ordered-mass-production`）。
- 中间口径：IR 口径仍称试制阶段（`prioritize_companies_21-zhenghai-ir-trial-stage`）。
- 产能：30,000 吨/年（`prioritize_companies_21-zhenghai-total-capacity`），烟台 84% / 南通 88%（`prioritize_companies_21-zhenghai-capacity-utilization`）。
- 能力匹配：能力匹配已核（`prioritize_companies_21-zhenghai-capability-match`）。
- FAULHABER：合作 20 年（`prioritize_companies_21-zhenghai-faulhaber`、`prioritize_companies_10-faulhaber-sxr-robotic-hands`）。
- 最大未知：量产订单与试制口径并存，实际出货规模未披露（`prioritize_companies_21-zhenghai-ir-trial-stage`）。

### 2.25 宁波韵升（600366）｜映射节点：稀土永磁

- 客户绑定：与头部企业绑定、签长期协议、完成样品交付与供货（`prioritize_companies_21-yunsheng-head-customer-lta`）。
- 小批量：小批量供货（`prioritize_companies_21-yunsheng-small-batch-supply`）。
- 产能：坯料 26,000 吨/年 + 晶界扩散 10,000 吨/年（`prioritize_companies_21-yunsheng-capacity-gbd`）。
- 磁组件：4.43 亿元、同比 +66.54%（`prioritize_companies_21-yunsheng-magnet-module-revenue`）。
- 风险：包头项目延期（`prioritize_companies_21-yunsheng-baotou-delay`）。

### 2.26 中信特钢（000708）｜映射节点：轴承钢、柔轮用钢

- 柔轮用钢：2023 年报称柔轮用钢替代进口，已被全球前五谐波厂中 2 家采用（`prioritize_companies_22-citic-2023-flexspline-import-sub`、`prioritize_companies_23-citic-flexspline-two-of-five`）。
- 客户实证：绿的谐波供应商 6 为中信特钢全资孙公司，由问询回复确认（`prioritize_companies_22-citic-supplier6-leaderdrive`）。
- 交期：60–90 天（`prioritize_companies_22-citic-leadtime-60-90d`）。
- 轴承钢：全球领先（`prioritize_companies_23-citic-bearing-global-lead`），2025H1 轴承钢产量（`prioritize_companies_23-citic-bearing-volume-h1-2025`），产能 2,000 万吨（`prioritize_companies_23-citic-capacity-2000wt`），棒材/线材牌号（`prioritize_companies_23-citic-rod-bearing-grades`、`prioritize_companies_23-citic-wire-bearing-gcr15`）。
- 客户结构：轴承与减速器客户（`prioritize_companies_23-citic-customer-bearings-reducers`），已机器人批量供货（`prioritize_companies_23-citic-robot-batch-supply`）。
- 收入占比：柔轮用钢收入不重大（`prioritize_companies_22-citic-flexspline-revenue-immaterial`）。
- 产能口径：2,000 万吨（`prioritize_companies_22-citic-capacity-20mt`）。

### 2.27 华辰装备（300809）｜映射节点：螺纹磨床、齿轮磨床

- 精度：2024 年报 P0 级精密螺纹磨床（`prioritize_companies_24-hca-p0-precision`、`graph_track_0-hca-p0-ar`）。
- **口径矛盾**：官网型号表述为 C0（`graph_track_0-hca-web-models-c0`），与年报 P0 并列，须按型号区分（`graph_track_0-hca-web-p0-prose`）。
- 零件能力：行星丝杠成套精密磨削小批量应用（`prioritize_companies_24-hca-screw-grinding-small-batch`），丝杠磨削构成壁垒（`graph_track_0-hca-screw-barrier`）。
- 人形适用性：可加工人形行星滚柱丝杠成套件的表述为人形适用性口径（`prioritize_companies_24-hca-humanoid-applicability`），公司有相关研发项目（`graph_track_0-hca-rd-humanoid-parts`）。
- 订单：福立旺 100 台为精密磨床层面订单，人形用途未确认（`graph_track_0-hca-fuliwang-100`、`prioritize_companies_24-hca-fuliwang-status-undisclosed`）。
- 产能匹配：产能与订单匹配（`prioritize_companies_24-hca-capacity-matches-orders`）。
- 齿轮磨床：非齿轮磨床已成型的确认供方（`prioritize_companies_25-hca-not-confirmed-gear-grinder-supplier`），成形磨削为其范围（`prioritize_companies_25-hca-profile-grinding-scope`），螺纹磨床 P0（`prioritize_companies_25-hca-thread-grinder-p0`），人形减速器项目状态与名称（`prioritize_companies_25-hca-humanoid-reducer-project-status`、`prioritize_companies_25-hca-humanoid-reducer-project-name`），适用性（`prioritize_companies_25-hca-cls-humanoid-reducer-applicability`）。
- 最大未知：人形机器人专项订单金额与台数未披露（`prioritize_companies_24-hca-fuliwang-status-undisclosed`）。

### 2.28 秦川机床（000837）｜映射节点：螺纹磨床、齿轮磨床

- 螺纹磨床：精密螺纹系列加工机床单项冠军、国内占有率第一（`prioritize_companies_24-qc-thread-grinder-share-one`）。
- 专机：HJ109 内螺纹 / HJ110 外螺纹磨床专为行星滚柱丝杠研制（`prioritize_companies_24-qc-hj109-hj110`），但"研制完成、待推广"（`graph_track_0-qc-hj109-hj110`）。
- 外螺纹范围：外螺纹磨床的人形范围已界定（`prioritize_companies_24-qc-outer-thread-grinder-robot-scope`）。
- 份额：汉江 41%（`prioritize_companies_24-qc-hanjiang-41pct`）。
- 齿轮磨床：产品与系列（`prioritize_companies_25-qc-gear-grinder-product`、`prioritize_companies_25-qc-gear-grinder-series`），成熟度（`prioritize_companies_25-qc-gear-grinder-maturity`），国内份额（`prioritize_companies_25-qc-gear-grinder-share`），进口替代（`prioritize_companies_25-qc-gear-grinder-import-substitution`），2025 年订单（`prioritize_companies_25-qc-gear-grinder-orders-2025`），新能源驱动（`prioritize_companies_25-qc-gear-grinder-nev-growth`）。
- 人形驱动：仅有宏观驱动（`prioritize_companies_25-qc-humanoid-macro-driver-only`），节点适配性（`prioritize_companies_25-qc-node-supply-fit`）。
- 最大未知：人形机器人专项订单金额未披露（`prioritize_companies_25-qc-humanoid-macro-driver-only`）。

### 2.29 集智股份（300553）｜映射节点：动平衡机、检测与测量仪器

- 产品：空心杯转子 / 减速器转子 / 行星滚柱丝杠 / 无框力矩电机平衡机 + 激光雷达测试机（`graph_track_3-eq2-jizhi-balancing`、`primary_source_baseline-jizhi-balance-critical`）。
- 客户：三花智控、鸣志、兆威、中大力德、速腾聚创等九家具名（`prioritize_companies_26-jz-named-robot-customers`、`graph_track_3-eq2-jizhi-balancing`）。
- 产线：2025H1 首条空心杯电机转子线（`prioritize_companies_27-jz-2025h1-first-rotor-line`、`graph_track_1-mt-jizhi-balancing-machines`）。
- 收入影响：明确"短期内对收入和利润影响较小"（`prioritize_companies_26-jz-small-revenue-impact`）。
- 需求替代风险：设备需求可被替代的风险（`prioritize_companies_26-jz-demand-substitution-risk`）。
- 外资主导：高速动平衡仍由外资主导（`prioritize_companies_27-jz-highspeed-balancing-foreign-led`），进口依赖（`prioritize_companies_26-jz-highspeed-import-dependence`）。
- 测试线收入：2026H1 测试线收入已披露（`prioritize_companies_27-jz-testline-revenue-2026h1`）。
- 并购：普迈收购已终止（`prioritize_companies_27-jz-pumai-acquisition-terminated`）。
- 验收周期：产线验收周期（`prioritize_companies_26-jz-line-acceptance-cycle`）。
- 最大未知：机器人相关收入规模未单独披露（`prioritize_companies_26-jz-small-revenue-impact`）。

### 2.30 东华测试（300354）｜映射节点：检测与测量仪器、六维力/关节力矩传感器

- 校准资质：东华校准 2024 年为首批 CNAS 机器人力/力矩检测能力（`prioritize_companies_27-dh-cnas-gbt43200-joint-test`）。
- 扩项：2026 年扩项至 GB/T 43200 机器人一体化关节模组全性能 30+ 项指标（`prioritize_companies_27-dh-cnas-gbt43200-joint-test`）。
- 合作：与南通振康就旋转关节模组测试控制平台战略合作（`prioritize_companies_27-dh-zhenkang-test-platform`），仍在推进、无订单（`prioritize_companies_27-dh-cooperation-no-order`）。
- 传感器：多轴传感器产线（`prioritize_companies_13-donghua-sensor-line-multiaxis`），关节模组测试（`prioritize_companies_13-donghua-joint-module`），尚无订单（`prioritize_companies_13-donghua-no-order-yet`）。
- 第三方校准：第三方校准服务定位（`prioritize_companies_27-dh-calibration-third-party-service`）。
- 集成度：关节模组测试的集成化（`prioritize_companies_27-dh-joint-module-integrated`）。
- 风洞天平：风洞力测试能力可迁移（`prioritize_companies_27-dh-windtunnel-force-transfer`）。
- 高端依赖：高端仍进口依赖（`prioritize_companies_27-dh-high-end-import-dependence`）。
- 经营变化：2026H1 收入下滑（`prioritize_companies_27-dh-2026h1-revenue-decline`）。

### 2.31 均普智能（688306）｜映射节点：关节/整机装配测试线、整机系统集成与代工

- **产能口径冲突**：2025Q3 表述为 1,000 台→3,000 台以上（`prioritize_companies_29-int-jp-q3-line-3000`），2026-03 定增问询函回复为已建 1,000 台、2026 年计划 3,000 台以上（`prioritize_companies_29-int-jp-capacity-conflict`）。
- 收入：机器人相关累计收入 390.72 万元、占比 <0.3%（`prioritize_companies_29-int-jp-rev-390`、`prioritize_companies_29-int-jp-rev-immaterial`）。
- 合同买方：2,825 万元合同的买方为苏州辰瓴信息技术有限公司、与智元创新无关，且未计入在手订单、仅定性为意向性采购（`prioritize_companies_29-int-jp-2825-buyer`）。
- 在手订单：7,317.26 万元（`prioritize_companies_29-int-jp-backlog-7317`）。
- 代工实绩：100 台 G1 代工（`prioritize_companies_29-int-jp-annual-oda-100g1`）。
- 体系认证：智元生产制造认证（`prioritize_companies_29-int-jp-annual-oda-system`、`prioritize_companies_28-jp-zhiyuan-cert`）。
- 中试线：中试线已建（`prioritize_companies_28-jp-pilot-line`），收入结构（`prioritize_companies_28-jp-revenue-mix`），机器人收入（`prioritize_companies_28-jp-robot-revenue`），在手订单（`prioritize_companies_28-jp-backlog`）。
- 募资：募投总额（`prioritize_companies_29-int-jp-fundraise-total`），无锡 2,000（`prioritize_companies_29-int-jp-wuxi-2000`），整线服务外壳（`prioritize_companies_29-int-jp-q3-shell-service`）。
- 最大未知：产能口径本身冲突，实际交付能力无法由单一数字确定（`prioritize_companies_29-int-jp-capacity-conflict`）。

### 2.32 东方精工（002611）｜映射节点：关节/整机装配测试线、整机系统集成与代工

- 合资：东方元启 80% 持股，与乐聚智能合资（`prioritize_companies_29-int-df-jv80`、`prioritize_companies_28-df-jv`）。
- 时间线：2025-09 设立，2026-03 产线启用（`prioritize_companies_29-int-df-line-start`）。
- 产线：宣称"国内首条年设计产能达万台级"（`prioritize_companies_28-df-line-10k`），公司相关负责人称 2026 年产量规模预计不会过万台（`prioritize_companies_29-int-df-output-below-10000`）。
- 节拍与测试项：节拍（`prioritize_companies_28-df-line-takt`），测试项（`prioritize_companies_28-df-line-tests`）。
- 订单：在手订单约 3,500 万元（`prioritize_companies_29-int-df-backlog`、`prioritize_companies_28-df-orders`）。
- 收入：截至 2026-02 营收 190 万元（`prioritize_companies_29-int-df-revenue-190`），占比不重大（`prioritize_companies_29-int-df-rev-immaterial`）。
- 协议性质：仅意向（`prioritize_companies_29-int-df-agreement-intent`），无约束力（`prioritize_companies_29-int-df-agreement-nonbinding`）。
- 部件：试产 + 小批量供货核心部件（`prioritize_companies_28-df-identity`）。
- 主体与口径：主体（`prioritize_companies_28-df-identity`），集团营收（`prioritize_companies_29-int-df-total-revenue`）。
- 最大未知：万台级设计产能与公司自述 2026 年产量预期之间的落差未获解释（`prioritize_companies_29-int-df-output-below-10000`）。

### 2.33 中大力德（002896）｜映射节点：行星减速器（A）、谐波减速器（B）、RV 减速器（B）

- 品类：行星 + RV + 谐波三大品类批量生产（`primary_source_baseline-zhongdali-three-categories`、`prioritize_companies_5-zdl-three-categories-batch`）。
- 收入：精密减速器占营收 24.24%（`prioritize_companies_5-zdl-precision-reducer-revenue`），减速器分部（`prioritize_companies_4-zdl-precision-segment`），谐波分部（`prioritize_companies_3-zd-reducer-revenue`）。
- 行星：精度规格（`prioritize_companies_5-zdl-planetary-precision-spec`），RV+行星 5 万台目标（`prioritize_companies_5-zdl-hd-planetary-50k-target`）。
- 谐波：已批量（`prioritize_companies_3-zd-harmonic-batch-production`）；**年报内部不一致**：2024 年报仅小型行星、2025 年报列四个谐波型号（ZCSD-14/ZSHF-14/ZSHF-11/ZSHD-8）（`prioritize_companies_3-zd-harmonic-batch-production`）。
- RV：产品组合（`prioritize_companies_4-zdl-rv-portfolio`），产能规划（`prioritize_companies_4-zdl-rv-capacity-plan`），终端客户（`prioritize_companies_4-zdl-terminal-customers`）。
- 人形：人形小型行星在研（`prioritize_companies_5-zdl-humanoid-small-planetary-rd`），人形 RV 研发计划（`prioritize_companies_4-zdl-humanoid-rnd-planetary`）。
- 不确定性：明确记录人形不确定性（`prioritize_companies_5-zdl-humanoid-uncertainty`）。
- 最大未知：谐波型号口径在年报间不一致，无法按型号统计产能（`prioritize_companies_3-zd-harmonic-batch-production`）。

---

## 3. B 级：次级线索（保留，但证据强度低于 A）

### 3.1 翔楼新材（301160）｜映射节点：柔轮用钢、轴承钢

- 产品：柔轮精冲材料，1 万小时疲劳测试，多型号客户验证、小批量供货（`prioritize_companies_22-xl-1wh-fatigue-small-batch`、`prioritize_companies_22-xl-2026h1-multigrade-validated`）。
- 交付形态：交付柔轮半成品而非成品件（`prioritize_companies_22-xl-flexspline-semi-finished`）。
- **主体性质**：是钢材**买方**而非钢厂（`prioritize_companies_22-xl-steel-buyer-not-mill`）。
- 资质状态：合格供应商但未获定点（`prioritize_companies_22-xl-qualified-supplier-no-designation`）。
- 收入：无单独机器人收入（`prioritize_companies_22-xl-no-separate-revenue`）。
- 自述边界：自称国内唯一（`prioritize_companies_22-xl-self-claim-domestic-only`）。
- 轴承钢：轴承套圈材料要求（`prioritize_companies_23-xianglou-bearing-ring-material-req`），一级供应商（`prioritize_companies_23-xianglou-bearing-tier1-supply`），认证（`prioritize_companies_23-xianglou-bearing-cert`），机器人批量状态（`prioritize_companies_23-xianglou-robot-batch-status`），机器人重点在柔轮（`prioritize_companies_23-xianglou-robot-focus-flexspline`），产能 8 万吨（`prioritize_companies_23-xianglou-capacity-8wt`），机器人收入小（`prioritize_companies_23-xianglou-robot-revenue-small`），机器人未来（`prioritize_companies_23-xianglou-bearing-robot-future`）。

### 3.2 禾川科技（688320）｜映射节点：旋转关节模组、行星减速器

- 谐波：MRS 谐波（`prioritize_companies_0-hc-mrs-harmonic`），GRS 行星（`prioritize_companies_0-hc-grs-planetary`）。
- 自制：自研（`prioritize_companies_0-hc-self-developed`），标准供货（`prioritize_companies_0-hc-standard-supply`）。
- **订单小**：订单规模小（`prioritize_companies_0-hc-orders-small`、`prioritize_companies_5-hcfa-humanoid-orders-small`）。
- 行星关节：系列化（`prioritize_companies_5-hcfa-planetary-joint-series`），HUG 集成（`prioritize_companies_5-hcfa-hugrs-integration`），前五客户（`prioritize_companies_5-hcfa-top5-customers`）。

### 3.3 三花智控（002050）｜映射节点：直线执行器（B）、旋转关节模组（C）

- 状态：仿生机器人仍为配合客户研发/试制/迭代/送样，未批量（`prioritize_companies_1-sh-2026h1-batch`）。
- 产能：产能计划（`prioritize_companies_1-sh-capacity-plan`）。
- 早期状态：2024 年直线执行器研发状态（`prioritize_companies_1-sh-linear-rd-status-2024`）。
- 缺失：无量化披露（`prioritize_companies_1-sh-no-quant-disclosure`）。
- 传闻否认：已否认传闻（`prioritize_companies_1-sh-rumor-denied`）。
- 最大未知：是否形成批量供货无一手确认（`prioritize_companies_1-sh-no-quant-disclosure`）。

### 3.4 恒立液压（601100）｜映射节点：行星滚柱丝杠

- 滚珠丝杠：精密磨削滚珠丝杠 7 万套/年，300+ 工业客户（`prioritize_companies_6-hl-601100-7w-ball-screw`）。
- 行星滚柱丝杠：完成送样和初步量产（`prioritize_companies_6-hl-601100-planetary-sampling`）。
- 主体：证券主体确认（`prioritize_companies_6-hl-601100-entity`）。
- **关键缺口**：行星滚柱丝杠的规模、产能、客户、订单均未披露（`prioritize_companies_6-hl-601100-planetary-sampling`）。

### 3.5 日发精机（002520）｜映射节点：螺纹磨床、装配测试线（C）

- 首台交付：SKJ7612 与 SK7420-1000 分别于 2025-06、2025-08 交付首台（`prioritize_companies_24-rf-first-units-2025`）。
- 具名客户：贝斯特、五洲新春、三联锻造、领益智造（`prioritize_companies_24-rf-named-customers`）。
- 能力：SK76 能力（`prioritize_companies_24-rf-sk76-capability`），人形带来磨床需求（`prioritize_companies_24-rf-humanoid-adds-grinder-demand`）。
- 收入：设备收入不重大（`prioritize_companies_24-rf-revenue-immaterial`）。
- **财务红旗**：2025 年财报为保留意见（`prioritize_companies_24-rf-qualified-opinion`），累计未分配利润 -28.93 亿元（`prioritize_companies_24-rf-accumulated-loss`）。
- 装配线：装配能力（`prioritize_companies_28-rf-assembly-capability`），装配线（`prioritize_companies_28-rf-assembly-lines`），磨床到整线（`prioritize_companies_28-rf-grinder-to-line`），轴承装配研发（`prioritize_companies_28-rf-bearing-assembly-rd`），丝杠装配研发（`prioritize_companies_28-rf-screw-assembly-rd`），低机器人收入（`prioritize_companies_28-rf-low-revenue`）。

### 3.6 国机精工（002046）｜映射节点：机器人专用轴承

- 能力：机器人轴承能力已确认（`prioritize_companies_8-gjjg-robot-bearing-capability`）。
- **否定项**：无人形机器人客户（`prioritize_companies_8-gjjg-no-humanoid-customer`）。
- 主体：法定名称（`prioritize_companies_8-gjjg-legal-name`），上市证券（`prioritize_companies_8-gjjg-listing-security`），在营子公司（含轴研所）（`prioritize_companies_8-gjjg-bearing-operating-subsidiaries`）。

### 3.7 立中集团（300428）｜映射节点：整机结构件与机身骨架

- 定点协议：伟景智能，2025-12-08（`graph_track_4-qi1-lizhong-designation-agreement`）。
- **核定性质**：5,000 台套 / 5 年 / 约 7,500 万元为**预测而非订单**（`prioritize_companies_17-ns-lz-forecast-not-order`）。
- 品类：六个核心加工件（`prioritize_companies_17-ns-lz-six-parts`）。
- 口径重申：IR 已重申预测口径（`prioritize_companies_17-ns-lz-ir-restate`）。

### 3.8 蓝思科技（300433）｜映射节点：整机结构件与机身骨架（B）、整机系统集成与代工（B）

- 结构件：轻量化金属结构件导入并随机器人批量交付（`prioritize_companies_17-ns-ls-batch-deliver`、`prioritize_companies_17-ns-ls-struct-batch`）。
- 材料：镁铝合金结构（`prioritize_companies_17-ns-ls-mg-al-struct`）。
- 产能：50 万台/年规划（`prioritize_companies_17-ns-ls-capacity`），产出 1 万台口径（`prioritize_companies_17-ns-ls-output-10k`）。
- 合资：与智元合资湖南智启未来（`prioritize_companies_29-int-lens-jv-zhiyuan`）。
- 代工范围：ODA 范围（`prioritize_companies_29-int-lens-oda-scope`）。
- 缺失：分部收入未拆（`prioritize_companies_29-int-lens-segment-revenue`）。

### 3.9 沃特股份（002886）｜映射节点：PEEK 树脂

- 产能：一期 500 吨/年 PEEK 投产（`prioritize_companies_19-wote-paek-phase1`）。
- 订单：注塑级 PEEK 已有部分订单（`prioritize_companies_19-wote-peek-orders`）。
- 齿轮级：齿轮级 PEEK 客户测试中（`prioritize_companies_19-wote-gear-grade-test`）。
- 易误合并项：人形定子包胶业务需与人形零部件区分（`prioritize_companies_19-wote-stator-humanoid`）。
- 机器人测试：机器人相关测试（`prioritize_companies_19-wote-robot-testing`）。
- 主体：法定主体（`prioritize_companies_19-wote-entity`）。
- 行业口径：产能过剩风险（`prioritize_companies_19-ind-capacity-overhang`），认证周期（`prioritize_companies_19-ind-cert-cycle`），铭牌≠产出（`prioritize_companies_19-ind-nameplate-not-output`），爬坡闸口（`prioritize_companies_19-ind-ramp-gate`），全球集中度（`prioritize_companies_19-ind-global-concentration`），国内产能（`prioritize_companies_19-ind-domestic-capacity`），人形仍早期（`prioritize_companies_19-ind-humanoid-early`）。

### 3.10 中欣氟材（002915）｜映射节点：PEEK 树脂（B）、DFBP（B）

- 一体化：萤石—氢氟酸—DFBP—PEEK 闭环（`prioritize_companies_19-zx-closed-loop`、`prioritize_companies_20-zhongxin-upstream-integration`）。
- DFBP 产能：5,000 吨装置（`prioritize_companies_19-zx-dfbp-capacity`）。
- 外售增量：5,000 吨装置是外售增量的主要来源（`prioritize_companies_20-dfbp-merchant-supply-narrowing`）。
- 认证：5,000 吨仅部分认证（`prioritize_companies_20-zhongxin-5000t-cert-partial`）。
- 试产：闭环试产（`prioritize_companies_20-zhongxin-closed-loop-trial`），DFBP 已投料（`prioritize_companies_20-zhongxin-dfbp-commissioned`）。
- 关键性：DFBP 为 PEEK 关键单体（`prioritize_companies_19-zx-dfbp-critical`），新材料增长（`prioritize_companies_19-zx-newmaterial-growth`）。
- 最大未知：客户认证仅有媒体转引（`prioritize_companies_20-zhongxin-5000t-cert-partial`）。

### 3.11 汇川技术（300124）｜映射节点：关节编码器

- 编码器：第一代编码器零件自制（`prioritize_companies_12-inovance-encoder-first-gen-parts`）。
- 外购：长春汇通为其编码器供应商（`prioritize_companies_12-changchun-huitong-encoder-supplier`）。
- 行业格局：外资集中（`prioritize_companies_12-encoder-market-foreign-concentration`），2022 年多摩川与海德汉合计份额 40%（`prioritize_companies_12-encoder-market-share-2022-40pct`）。
- 瓶颈：芯片与码盘为瓶颈（`prioritize_companies_12-encoder-bottleneck-chip-codewheel`）。
- 单机用量：人形单机编码器用量需求（`prioritize_companies_12-humanoid-encoder-per-unit-demand`）。

### 3.12 芯动联科（688582）｜映射节点：IMU

- 六轴 IMU：仍在研发（`prioritize_companies_15-xdai-6axis-imu-rd`），时间表（`prioritize_companies_15-xdai-6axis-timing`）。
- 客户集中：已披露集中度（`prioritize_companies_15-xdai-customer-concentration`）。
- 良率：已披露（`prioritize_companies_15-xdai-yield`）。
- 合作口径：对人形为"择机合作"（`graph_track_3-ps3-imu-xindonglianke`）。
- 主体：证券主体（`prioritize_companies_15-xdai-security-688582`）。

### 3.13 抚顺特钢（600399）｜映射节点：轴承钢（B）、柔轮用钢（C，证据缺口）

- 牌号：5,400+ 牌号（`prioritize_companies_23-fushun-5400-grades`）。
- 轴承产品线：轴承产品线（`prioritize_companies_23-fushun-bearing-product-line`），轴承用钢牌号（风电）（`prioritize_companies_23-fushun-bearing-grades-wind`）。
- 产出：2025 年产量（`prioritize_companies_23-fushun-output-2025`）。
- **财务红旗**：2025 年归母净利 -8.05 亿元（`prioritize_companies_23-fushun-net-loss-2025`）。
- **证据缺口（记录为缺口而非证明不存在）**：柔轮用钢节点无牌号/客户/订单证据（`prioritize_companies_22-ind-citic-flexspline-coverage` 为行业口径）。

---

## 4. C 级与已排除（保留记录，不得据此推断供货）

### 4.1 拓普集团（601689）｜映射节点：直线执行器（C）、旋转关节模组（C）

- 仅有机器人执行器事业部的组织动作，无型号、产能、客户（`primary_source_baseline-tuopu-actuator-division`）。
- 节点结构：直线执行器的 BOM 与执行器定义已界定（`prioritize_companies_1-lin-bom`、`prioritize_companies_1-lin-exec-def`），丝杠零件边界（`prioritize_companies_1-lin-screw-part`），供应商图谱（`prioritize_companies_1-lin-supplier-map`）。
- 结论状态：未经验证（unverified），不得据此推断供货关系。

### 4.2 上海机电（600835）｜映射节点：RV 减速器（C）

- 合资股比：纳博传动 51% + 纳博精机 33%（`prioritize_companies_4-smec-rv-jv-stakes`）。
- **明确否定项**：RV 合资公司产品未用于人形机器人（`prioritize_companies_4-smec-rv-not-humanoid`）。
- 收入：合资收入小（`prioritize_companies_4-smec-jv-revenue`），集团营收（`prioritize_companies_4-smec-group-revenue`）。
- 参考：纳博产品范围（`prioritize_companies_4-nabtesco-scope-reported`），外资 RV 壁垒（`prioritize_companies_4-rv-barrier-reported`）。

### 4.3 弘信电子（300657）｜映射节点：触觉/电子皮肤（C）

- 仅为行业趋势 + 未来重点布局，属技术储备（`prioritize_companies_14-hx-eskin-strategy`、`prioritize_companies_14-hx-eskin-industry-trend`）。
- 主体：法定名称与证券代码（`prioritize_companies_14-hx-legal-name`、`prioritize_companies_14-hx-entity`）。

### 4.4 全志科技（300458）｜映射节点：计算与控制单元（C）

- 产品：MR153 / MR527 / MR536（`prioritize_companies_16-allwinner-mr153`、`prioritize_companies_16-allwinner-robot-products`）。
- 下游：四足、语音陪伴、扫地等低算力场景（`prioritize_companies_16-allwinner-robot-products`）。
- **否定项**：无人形机器人证据（`prioritize_companies_16-infer-allwinner-no-humanoid`）。
- 主体：`prioritize_companies_16-allwinner-entity`。

### 4.5 中科创达（300496）｜映射节点：计算与控制单元（C）

- 机器人业务为自建 AMR / 叉车整机 + 软件（`prioritize_companies_16-thundersoft-robot-business`）。
- 列出目的即为排除概念混淆（`prioritize_companies_16-infer-thundersoft-role`）。
- 主体：`prioritize_companies_16-thundersoft-entity`。

### 4.6 广电计量（002967）｜映射节点：检测与测量仪器（C）

- 业务规模：2026H1 计量 3.86 亿元 / 可靠性与环境试验 4.15 亿元（`prioritize_companies_27-grg-calibration-business-scale`）。
- **口径边界**："具身机器人"仅为可靠性板块的新领域方向（`prioritize_companies_27-grg-embodied-robot-new-field`）。

### 4.7 领益智造（002600）｜映射节点：整机系统集成与代工（C）

- 仅媒体口径：>5,000 台硬件与整机组装、北京人形创新中心中试基地、50 万台超级工厂（`prioritize_companies_29-int-ly-assembly-5000`）。
- 无公告、无定期报告支撑（`prioritize_companies_29-int-ly-assembly-5000`）。

### 4.8 宝钢股份（600019）｜映射节点：柔轮用钢（C）

- **明确否定项**：AHR 无取向硅钢，非柔轮用钢（`prioritize_companies_22-baosteel-ahr-silicon-not-flexspline`）。

### 4.9 南钢股份（600282）｜映射节点：轴承钢（C）

- 仅行业媒体将其与中信特钢并列为国内轴承钢主力之一（`prioritize_companies_23-node-domestic-main`）。
- 无公司层牌号/客户/订单证据。

---

## 5. 供应连续性风险节点（8 个，结论均为 `candidate`，无 `confirmed`）

上游 8 份 `node-assessment.json` 的 `conclusion` 全部为 `candidate`；`risk_scope` 为节点级或分支级，需分别读取。

### 5.1 谐波减速器｜risk_scope = global

- 实际依赖：柔轮材料、精密齿轮加工、装配跑合三段工艺耦合（`graph_track_1-mt-junde-selfsupply`）。
- 良率未知：量化良率与分型号良率未披露，利用率不可替代良率（`primary_source_baseline-harmonic-yield-undisclosed`）。
- 可用替代：中大力德已批量（`prioritize_companies_3-zd-harmonic-batch-production`），斯菱智驱已投产（`prioritize_companies_3-sl-harmonic-in-production`），昊志自主开发（`prioritize_companies_9-haozhi-self-developed`）。
- 外资交期：仅有定性表述（`primary_source_baseline-harmonic-foreign-leadtime`）。
- 反证条件：若任一 A 股主体披露分型号量化良率与交期周数，则该节点的"良率不透明"假设可被推翻（`primary_source_baseline-harmonic-yield-undisclosed`）。

### 5.2 行星滚柱丝杠｜risk_scope = branch

- 实际依赖：丝杠螺纹磨削工艺（`graph_track_0-fl-grinding-gate`），磨床精度门槛（`prioritize_companies_1-lin-screw-part`）。
- 产能 vs 产出：双林 10 万套规划 vs 1,500 套实际（`prioritize_companies_6-sl-300100-capacity-10w`、`prioritize_companies_6-sl-300100-output-2025`）；震裕 56 万套达产口径（`prioritize_companies_6-zy-300953-560k-ramp`）；恒立 7 万套为滚珠丝杠口径（`prioritize_companies_6-hl-601100-7w-ball-screw`）。
- 规划前置条件：扩产受设备与认证前置约束（`graph_track_0-fl-capacity-precondition`）。
- 订单小：相关订单规模小（`graph_track_0-fl-orders-small`）。
- 反证条件：若出现披露实际月产与良率的主体，则"规划产能不可核验"假设可被推翻（`prioritize_companies_6-sl-300100-smallbatch-conversion`）。

### 5.3 螺纹磨床｜risk_scope = branch

- 精度口径矛盾：C0 与 P0 并列，须按型号区分（`graph_track_0-hca-web-models-c0`、`prioritize_companies_24-hca-p0-precision`）。
- 设备稀缺：海外高端螺纹磨床稀缺（`prioritize_companies_24-thg-hw-overseas-scarce`），成本与交期（`prioritize_companies_24-thg-hw-cost-leadtime`）。
- 单一来源：磨削工序存在单一来源风险（`prioritize_companies_24-thg-jj-single-source`），良率口径（`prioritize_companies_24-thg-jj-g1-yield`）。
- 减速器设备约束：减速器扩产受设备约束（`graph_track_1-mt-huandong-equipment-constraint`）。
- 反证条件：若设备商披露人形专项订单金额与台数，则"订单不可核验"假设可被推翻（`prioritize_companies_24-hca-fuliwang-status-undisclosed`）。

### 5.4 六维力/关节力矩传感器｜risk_scope = global

- 实际依赖：应变片与标定（`primary_source_baseline-hanwei-strain-gauge`），整机多点布置（`primary_source_baseline-ubtech-walker-s2-sensors`）。
- 外资主导：高端仍由国际厂商主导（`primary_source_baseline-keli-foreign-dominance`），ATI 领先（`graph_track_3-ps3-ati-overseas-lead`）。
- 交付阶段：国内多为送样/小批量（`graph_track_3-ps3-keli-sampling-stage`）。
- 市场结构：中国人形机器人传感器集中度（`prioritize_companies_13-mkt-china-humanoid-concentration`）。
- 反证条件：若定点家数与年度供货量被披露，则"供货量未知"假设可被推翻（`graph_track_3-ps3-keli-sampling-stage`）。

### 5.5 柔轮用特种钢｜risk_scope = global

- 实际依赖：40CrNiMo4 类材料进口依赖（`prioritize_companies_22-ind-40crnimo4-import-dependent`）。
- 已实现替代：中信特钢柔轮用钢替代进口（`prioritize_companies_22-citic-2023-flexspline-import-sub`），被全球前五中 2 家采用（`prioritize_companies_23-citic-flexspline-two-of-five`）。
- 覆盖范围：中信特钢的柔轮覆盖为行业口径（`prioritize_companies_22-ind-citic-flexspline-coverage`）。
- 市场规模：柔轮用钢市场规模（`prioritize_companies_22-ind-flexspline-steel-market-size`）。
- 反证条件：若 50CrMo4 丝杠用钢的 A 股供方被具名披露，则"材料供方未具名"缺口可被填补（`prioritize_companies_23-node-highpurity-gap`）。

### 5.6 零部件送样/评鉴认证｜risk_scope = global

- 认证周期：仅有"流程复杂、周期长"的定性表述（`prioritize_companies_21-jinli-cert-cycle-qualitative`）。
- 首次零部件认证：CR305 首个部件认证（`graph_track_4-qi1-cr305-first-component-cert`）。
- 设计到量产：双林从无定点（2025-12-31 口径）到部分定点（2026-08-25）历时约 8 个月（`prioritize_companies_6-sl-300100-no-designation-2025`、`prioritize_companies_6-sl-300100-designation-2026`）。
- 体系认证：ISO / 功能安全门槛（`prioritize_companies_11-moons-m56s-safety`）。
- 反证条件：若出现具名认证月数，则"周期不可量化"假设可被推翻（`prioritize_companies_21-jinli-cert-cycle-qualitative`）。

### 5.7 稀土永磁｜risk_scope = global

- 中国份额：94%（`prioritize_companies_21-ndfeb-china-share-94`）。
- 出口管制：需出口许可（`prioritize_companies_21-ndfeb-export-license-required`），镝/铽管制（`prioritize_companies_21-ndfeb-export-control-dy`、`prioritize_companies_21-ndfeb-export-control-tb`）。
- 供给集中：三家 A 股主体均已小批量（`prioritize_companies_21-jinli-small-batch-delivery`、`prioritize_companies_21-zhenghai-small-batch-supply`、`prioritize_companies_21-yunsheng-small-batch-supply`）。
- 反证条件：若具名客户与人形用量被披露，则"未具名"缺口可被填补（`prioritize_companies_21-jinli-small-batch-delivery`）。

### 5.8 灵巧手整手｜risk_scope = global

- 传动路线未收敛：内置直线驱动、微型滚珠丝杠、腱绳、微型齿轮、微型谐波并存（`graph_track_3-ps4-linkerhand-three-routes`、`prioritize_companies_2-ls-tendon-route-caution`）。
- 状态混杂：批量、小批量、样机、展示样机表述并存（`prioritize_companies_2-ls-batch-vs-smallbatch-contradiction`）。
- 产能未披露：灵巧手产能与良率未披露（`prioritize_companies_2-zw-hand-no-volume-or-customer`）。
- 反证条件：若路线收敛并出现整手出货量披露，则"路线未收敛导致集中度不可统计"假设可被推翻（`prioritize_companies_2-ls-linkage-route-mass-market`）。

---

## 6. 未证实节点与保留的未知（不得填补）

### 6.1 未证实（not-proven）节点

- 关节编码器：A 股主体是否已进入人形定点未获一手披露，奥普光电明确暂未批量销售（`prioritize_companies_12-yuheng-humanoid-no-batch-sales`）。
- RV 减速器：人形髋/肩重载位直接装机证据缺失（`prioritize_companies_4-hd-humanoid-rd-only`）。
- IMU：芯动联科为"择机合作"，非供货（`graph_track_3-ps3-imu-xindonglianke`）。
- 计算与控制：整机厂算力模组多品牌可选，具体芯片供应商未具名（`prioritize_companies_16-infer-rk-role-gap`）。
- 电池包：功率/续航指标与 A 股供应关系未取得一手披露（`primary_source_baseline-figure-vertical-integration`）。
- 线束与连接器：单机价值量与可靠性指标未披露（`prioritize_companies_18-har-cost-share`、`prioritize_companies_18-har-ppm`）。
- 场景部署可靠性：整机 MTBF、连续作业可靠性与维护闭环缺公开量化披露，唯一量化值为 Figure 单厂自述（`graph_track_1-mt-figure-eol-fpy`）。

### 6.2 全局未知（保留原样）

1. 谐波减速器、RV 减速器、行星滚柱丝杠、灵巧手整手的量化良率均未披露；产能利用率不可替代良率（`primary_source_baseline-harmonic-yield-undisclosed`）。
2. 汇川技术、鸣志电器、柯力传感、兆威机电、双林股份、震裕科技均未单独拆分人形机器人收入（`prioritize_companies_2-zw-h1-revenue-no-robot-segment`、`prioritize_companies_7-ZY-REV-SHARE-015`）。
3. 除均普智能（智元合资；另 2,825 万元合同买方为苏州辰瓴、非智元）与环动科技（埃斯顿，招股书口径）外，客户普遍未具名，"进入供应体系""送样"不能等同于供货（`prioritize_companies_29-int-jp-backlog-7317`、`prioritize_companies_4-hd-customer-concentration`）。
4. 环动科技截点为双环传动控股子公司，分拆上市已由双环传动董事会决议终止并撤回申请文件，截点尚非独立 A 股上市公司（`prioritize_companies_4-hd-not-separately-listed`）。
5. 奥普光电明确编码器"暂未形成批量销售"；其他 A 股编码器主体是否已进入定点未在本次证据中出现（`prioritize_companies_12-yuheng-humanoid-no-batch-sales`）。
6. 灵巧手传动路线分歧（内置直线、微型滚珠丝杠、腱绳、微型齿轮、微型谐波）用量与瓶颈未分别取证（`graph_track_3-ps4-linkerhand-three-routes`）。
7. 丝杠产能落地落差：双林 10 万套（计划 2026-06）（`prioritize_companies_6-sl-300100-capacity-10w`）、震裕 56 万套（达产口径）（`prioritize_companies_6-zy-300953-560k-ramp`）、恒立 7 万套（滚珠丝杠口径）（`prioritize_companies_6-hl-601100-7w-ball-screw`）的爬坡与良率未核验。
8. 金力永磁的"国际知名科技公司"未具名，人形电机转子用量与认证进度无法交叉验证（`prioritize_companies_21-jinli-small-batch-delivery`）。
9. 华辰装备与集智股份的人形相关收入是否成规模仍未定，前者未见人形专项订单金额（`prioritize_companies_24-hca-fuliwang-status-undisclosed`），后者明确短期影响小（`prioritize_companies_26-jz-small-revenue-impact`）。
10. 外资谐波与高端力传感器交期仅有定性表述，唯一可核验周数/月数为海外高端螺纹磨床 12–24 个月（`graph_track_4-qi4-lvde-grinder-12-24mo`）。
11. 国内本体厂关节与传感器自制/外采比例未披露，垂直整合（V5）程度无法检验（`graph_track_4-qi6-ubtech-self-hw-harmonic-joint`）。
12. 触觉路线（电子皮肤/MEMS/压阻/电容）并存，寿命、一致性与标定方法未披露（`prioritize_companies_14-hw-nextgen-pipeline`）。
13. RV 减速器在人形髋/肩重载关节的直接装机证据未取得（`prioritize_companies_4-rv-heavy-load-position-reported`）。
14. 螺纹磨床精度口径 C0 与 P0 并列矛盾，需按型号区分（`graph_track_0-hca-web-models-c0`）。
15. 均普智能总装产能口径冲突（1,000 台 vs 3,000 余台）（`prioritize_companies_29-int-jp-capacity-conflict`）。
16. 认证周期仅有"流程复杂、周期长"表述，无月数/周数（`prioritize_companies_21-jinli-cert-cycle-qualitative`）。
17. 50CrMo4 丝杠用钢的 A 股供方未披露（`prioritize_companies_23-node-highpurity-gap`）。
18. 电池包功率/续航与供应关系未披露（`primary_source_baseline-figure-vertical-integration`）。
19. 整机下线一次通过率、返修率与测试时长未披露（中国供应链）；唯一量化值为 Figure 单厂自述（`graph_track_1-mt-figure-eol-fpy`）。
20. V3（中小型/轻量化）分支证据显著薄于 V1（`primary_source_baseline-fourier-gr3-spec`）。

---

## 7. 综合口径行（每条均为上游 `-inf-*` 主张，非本报告新增判断）

- A 股供货连接未确认（`primary_source_baseline-inf-a-share-link-unconfirmed`）。
- 高风险环节画像（`primary_source_baseline-inf-high-risk-segment-profile`）。
- 本体厂规划产能 vs 零件产能落差（`primary_source_baseline-inf-oem-plan-vs-component-capacity-gap`）。
- 研究优先级排序口径（`primary_source_baseline-inf-research-priority-order`）。
- 垂直整合与替代关系（`primary_source_baseline-inf-vertical-integration-substitution`）。
- 良率不透明缺口（`primary_source_baseline-inf-yield-opacity-gap`）。

---

## Sources

- `blocks/77bf424416e4f75d2b1737d7e21b4885a8e22c75c548040b6899c112de295da3/scope.json`（产品边界、变体、环节、阶段、覆盖项、开放问题）
- `blocks/938f52734de450f5637f914a7a0987af9265a642c138c5204584fc7610197899/supply-chain.json`（已校验节点/边/评估目标/公司映射目标/全局未知）
- `blocks/8cf3c1a39c4b291539925377ae134dedd2c043b83d551915f31675089c2df94f/claims.json`（`primary_source_baseline-*`）
- `blocks/0ab643b98afc9d31f3edd818f8d58e1cd52f1c30d141db316b51d3c4819c8e84/{0,1,2,3,4}/claims.json`（`graph_track_0-*` … `graph_track_4-*`）
- `blocks/1cdd2782b5ccb9bb8a37e2bad02e2ae88a4e8a14e7c0805c0f3a424e49029e52/{0..29}/company-priorities.json` 与 `claims.json`（`prioritize_companies_N-*`）
- `blocks/ca9605ff77dea9299f38abb26c7e3842974cc343a9fce70af54173eabd666f35/{0..7}/node-assessment.json`（8 个风险节点评估，结论均为 `candidate`）


## Evidence cards

### prioritize_companies_6-sl-300100-designation-2026

- Statement: 截至2026年8月25日，双林股份已获国内头部新势力车企定点，开发并生产用于人形机器人的直线驱动关节模组及反向行星滚柱丝杠；客户名称未披露。
- Status: confirmed
- Scope: node:N-PLANETARY-ROLLER-SCREW
- As of: 2026-08-25
- Sources: http://file.finance.sina.com.cn/211.154.219.97:9494/MRGG/CNSESZ_STOCK/2026/2026-8/2026-08-25/12534038.PDF
- Exact quote: （1）丝杠：机器人丝杠方面，目前公司已获国内头部新势力车企 定点，开发并生产用于人形机器人的直线驱动关节模组及反向行星滚柱 丝杠。
- Locator: 投资者关系活动记录表 问题2回复
