# 更新时间 2020-06-13
    I.产品定位	
        A.产品名称	
        B.产品背景	
        C.产品介绍	
        D.应用场景	
    II.团队情况	
        A.人员分配表	
    III.需求分析
        A.需求概述	
        B.产品预期目标	
        C.可行性分析	
        D.同户需求	
        E.功能需求	
            1.村干选举功能	
            2.财务公示功能	
            3.光荣榜功能	
            4.信息登记功能	
            5.反馈箱功能	
            6.乡村特色功能。
            7.通知	
            8.贫困人数可视化	
    F.系统参与者	
    IV.交互设计	
        A.整体	
        B.首页图	
        C.财务公示-管理图	
    V.技术方案	
        A.前端	
        B.后端	
    VI.系统上线与运维	

# 产品定位
    为更好实现习近平总书记建设美丽乡村新理想，更好发展乡村特色，给乡村的管理和经济带来发展，我们小组讨论并通过这一小程序方案。其次，随着5G时代的到来，网络发展迅速，现如今，许多乡村还并未普及现在流行并且方便的微信小程序更方便的网络工具，来管理、推广本地的乡村和民俗，在5G的机遇下，发展这些网络推广工具一定会很好地促进经济的发展。
# 产品介绍
    本产品大体的功能共有6个，分别是：
    	• 通知
    	• 村干选举功能
    	• 财务公示功能
    	• 光荣榜功能
    	• 信息登记功能
    	• 反馈箱功能
    	• 乡村特色功能。
        6个功能相辅相成，共同为乡村干部管理乡村提供方便迅捷的工具。
        产品还提供消息推送的辅助功能，当有新的通知或者审核通过时，都会直接推送到个人微信上，方便查看。
#应用场景
        本产品主要为建设美丽乡村研发，服务对象为各地乡村，为各地乡村提供方便的工具来帮助其管理，能很好地解放乡村干部劳动力，增加全民参与乡村建设的热情，公示财务情况随时能查看，能很好遏制贪污腐败官员的产生。
# 团队情况
    项目经理
    `柯华富`---统筹全局，管理项目进度，搭建服务器
    前端
    `陈伟畅`、`柯华富`---开发小程序端，前端与后端的交互
    后端
    `张正印`---开发小程序后端，设计系统数据库
    UI设计及文档
    `彭及钰`---UI界面设计，文档编写
# 需求分析
    •  为更好实现习近平总书记建设美丽乡村新理想，我们小组开会讨论通过这一提案。
    •  现如今许多乡村还并未普及现在流行并且方便的微信小程序更方便的网络工具，来管理、推广本地的乡村和民俗，依然沿用以前的旧方法来对乡村进行管理，造成诸多不便，财务数据等未公布，也会造就贪污腐败的官员。全民参与乡村的监督，才能更好的激发村民干部工作的激情，对百姓也会更加尽责。
# 产品预期目标
    系统目标：
        本产品服务于乡村，预期目标是辅助乡村干部管理乡村，让本村村民能监督和参与村里的事务，逐步形成民官和谐共处、官员廉洁的美丽乡村景象。
    功能目标：
    	• 村干部进行换届选票时可使用该系统，村干部管理员发布选举信息，该村村民选择投票。
    	• 村干部管理员可在系统上公布财务信息，仅由该村村民可查看。
    	• 村干部管理员可在系统上公示光荣榜（对乡村有贡献的人或者本村大学生名单），该村村民可查看。
    	• 村民必须申请并由村干部管理员审核才能成为该村村民。村民须进行信息登记，登记完成后交由村干部管理员审核，审核通过，成为该村村民，否则还是游客。成为村民后可享受村民权限。
    	• 村民可通过反馈箱反馈意见给村干部，村干部可查看。
    	• 村干部可选择发布通知，并推送到本村村民微信中，村民可点击推送进入小程序进行查看。
# 可行性分析
    • 经济可行性：该项目投入成本少，后期运维简单
    • 技术可行性：目前设计的功能基本可以实现
    • 运行环境可行性：该项目所需服务器不大，运行环境搭载不难
    • 其他可行性：小组在线下对自己乡村以及附近乡村进行调查，调查发现并乡村基本没有网络管理乡村的工具，还是采用线下方式进行工作，造成很大的不便，所以项目可行。
# 同户需求
        该系统服务于乡村，现在网络发展迅速，对于正在发展的乡村来说，缺少许多宣传或管理自己家乡一个网络平台，造成信息更新缓慢，不能及时了解群众的问题，管理难度也比较大。村民可以随时随地在美丽乡村小程序上发表自己的意见、参与选举、查看村委会的财务公示等等，能更好监督村干部的工作，同时也能参与到村里的事务中。
# 功能需求
       	村干选举功能
       村干部：村干部可以发起选举，选定选举内容、时间、票数等等，发起完成之后，可以开始选举，选举开始之后将不可修改，过程中可点击查看票数。村干部还可通过搜索查看历史选举信息。
       村民：村民只能看到村干部发起的选举，并且可以进行投票，投票完成后将不能改票。村民还可通过搜索查看历史选举信息。
       游客：游客要认证成为村民或者村干部才能使用该功能。
       （村干部界面）
    
       	财务公示功能
       村干部：村干部可添加、查看、修改、删除财务信息（包括收入支出）。
       村民：村民仅可查看财务信息（包括收入支出）。
       游客：游客要认证成为村民或者村干部才能使用该功能。
    
       （村干部界面）
       	光荣榜功能
       村干部：村干部可查看、添加、修改光荣榜信息（包括名人榜和大学生名单）。
       村民：村民仅可查看光荣榜信息（包括名人榜和大学生名单）。
       游客：游客要认证成为村民或者村干部才能使用该功能。
       （村民界面）
       	信息登记功能
       村干部：村干部可以进行信息登记、查看、修改，并且游客登记的信息提交到村干部审核，通过则同意该游客成为该村村民，享受村民权限。
       村民：村民可以查看、修改自己的信息。
       游客：游客可以进行信息登记，登记完成后须等待村干部审核，审核通过后成为该村村民，享受村民权限。
    
       （信息登记界面）
       	反馈箱功能
       村干部：村干部可以查看反馈箱。
       村民：村民可提交反馈（包括实名反馈和匿名反馈），并且可以在“我的”—>“历史意见”里查看自己反馈的所有意见。
       游客：游客要认证成为村民或者村干部才能使用该功能。
    
       （反馈-村民界面）
       	乡村特色功能。
       村干部：村干部可管理乡村特色，包括增加、删除、修改。
       村民，仅可查看乡村特色。
       游客：仅可查看乡村特色。
          通知
       村干部：村干部可添加通知（时间、地点、内容等），发起的通知在会推送给村民。
       村民：在村干部发起通知后，村民在微信上可收到推送消息，点击可进入查看通知。
       游客：游客要认证成为村民或者村干部才能使用该功能。（如下一页图）
       （通知-村民界面）
       贫困人数可视化
       “我的”一页里有一个横向图（如下图所示），用来表示该村总人口数、贫困人数、留守儿童数、空巢老人数。使数据可视化，能很好地表示出该村的贫困情况，帮助村干部更好管理乡村。数据可视化也能更直观地表示出该村的扶贫情况。



# 系统参与者
    身份
    权限
    可使用功能
    游客
    低
    乡村特色
    村干部
    高
    	• 通知
    	• 村干选举功能
    	• 财务公示功能
    	• 光荣榜功能
    	• 信息登记功能
    	• 反馈箱功能
    	• 乡村特色功能
    村民
    中

# 交互设计
    整体
    在整体的UI配色方面每一个模块都有他对应的一个颜色，主题色是红色色系。
    整体设计的原则：每个模块都从客户角度出发，遵循简单易懂，一个模块内尽量少跳转页面，让用户始终清楚自己在系统的位置。
    首页图
    首页组成：首页是由轮滑图+定位+系统功能+乡村特色四个模块，基本囊括了系统的所有功能，每个模块互相独立，让人一目了然，进来系统方向清晰。
    首页层次：首页的层次分明，每一个模块都独立起来，而且配色简单而不俗气。
    首页各模块说明：
    	• 轮滑图：每一个轮滑图可以包括通知、乡村特色等等，能让人更好了解本村的情况。
    	• 定位：定位功能可以显示是否在这个村庄认证，若认证了，则成为该村村民，享受村民权限，可以让用户清楚自己在系统中的角色。
    	• 系统功能：系统功能共有6个按钮，每个按钮都有不同的配色，对应相应功能，比如财务公示的配色为绿色，代表财务公正明清，坚决肃清作假帐的不良行为。
    	• 乡村特色：乡村特色包括三色模块，特产、景色、习俗。每个模块分别用两个当地最热门的作为代表，展示在首页中，特色这一模块排版简单明了，通过图片+文字形式展示给用户，从而给用户视觉效果，印象深刻，吸引用户点击。
    
       
    （首页图）	（财务公示-管理图）
    
       
    （我的图）	             （通知-村民图）
    财务公示-管理图
    财务公示-管理图是村干部在管理财务过程中的图片。村干部长按财务记录可动画滑出修改、删除按钮，并且把该记录标红，用红色提醒用户现在正在操作这条记录，简单明了。
    财务公示每一财务信息都在此页面，每一条记录代表每一刺进来源，包括金额，经办人、时间、说明。每一条记录都可以展开（不用跳转查看），这样一页能展示的记录就比较多，用户在使用时就能减少翻页下拉操作。
    财务公示采用列表切换形式展示，这样减少了用户跳转页面操作，让用户更加耐心。
# 技术方案
    • 前端
       选举模块、信息登记模块、村民审核模块、反馈模块、通知模块、财务模块、光荣榜模块、登录模块等全部采用小程序原生开发技术开发，腾讯原生组件，自定义开发。没有引入其他依赖包。通过调用后端api实现数据交互，封装请求，减少资源请求数，对前端页面进行有效优化。代码风格良好，具有很高的可读性。各个页面间逻辑清晰。
    • 后端
       后端采用的是SpringBoot框架，考虑到信息处理以及交互还有适配性等方面，采用SpringBoot框架可以有效的对功能进行执行和数据处理，而且兼容性也会更好，后端采用的是以mysql 7.0的数据库进行存储，采用的是jdbc连接，Sql语句处理数据。整体的功能模块，为了更加便于理解和调度，采用了@Controller和@Service，将一个功能划分为控制器模块和服务器模块，对齐进行数据的接收和整理。
       系统上线与运维
    • 运营
       在小程序正式上线后，面对的用户群体主要是乡村，包括村民、村干部、游客。上线后村干部维持村里系统的稳定，保证村民不会恶意损坏系统，村民也应遵守网络法律法规，做一个守法的公民。
       现在许多乡村都缺少线上管理以及参与乡村事务的系统，我觉得我们这个系统还是挺有发展前景的，刚开始投入使用时可能村干部工作量会大一点，但是录完村民信息后，后面就可以正常使用了。
    • 维护
       该系统维护起来还是比较简单的，但是我们同时运行的用户数量有限。服务器比较小，同时跑不了很多用户，但是现在是基本够用了，以后能发展的话就要换个大一点的服务器，影响不大。
       我们小组的前端作为运维人员，专门检测每天小程序的运行情况，基本不占用很多资源，维护起来也方便。
