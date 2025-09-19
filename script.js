// 心学日签真言数据库
const yangmingFortunes = {
    "平静": [
        {
            text: "心外无物，心外无事，心外无理。",
            source: "《传习录》",
            explanation: "这是王阳明心学的核心命题，表达了'心即理'的思想。意思是世界万物都离不开我们内心的感知和理解，离开了心的认知，就没有独立存在的'物'、'事'、'理'。",
            application: "在平静时，体会内心本体的清净，明白外在世界的纷扰皆由心生。保持内心的平和与清明，就能看透事物的本质，不被外物所困扰。"
        },
        {
            text: "静处体悟，事上磨炼。",
            source: "《传习录》",
            explanation: "这句话强调了心学修行的两个重要方面：在安静中体悟心性本源，在实际事务中磨练实践功夫。静坐思考能让我们认识内心，而日常事务则是检验和提升心性的道场。",
            application: "当你内心平静时，可以静坐冥想，体会内心的澄澈；同时也要在日常生活中，以平和心态处理各种事务，在实践中检验和提升自己的心性修养。"
        },
        {
            text: "此心不动，随机而动。",
            source: "《王阳明全集》",
            explanation: "这是王阳明对'良知'运作状态的精妙描述。内心保持如如不动的本然状态，但对外界的变化能够灵活应对。不动的是良知本体，随缘变化的是良知的妙用。",
            application: "在平静时刻，保持内心的安定和清明，不为外物所动。但当遇到需要处理的事情时，又能灵活应变，顺应时机做出恰当的反应，做到动静结合。"
        },
        {
            text: "人须在事上磨练做功夫，乃有益。",
            source: "《传习录》",
            explanation: "王阳明强调真正的修养不能脱离现实生活，必须在具体的事务中磨练自己的心性。离开实际事务的所谓修行是空洞的，只有在面对现实挑战时，才能真正检验和提升自己的心性。",
            application: "不要逃避生活中的困难和挑战，而是将其视为磨练心性的机会。在处理工作、家庭、人际关系等各种事务时，保持觉察，这就是最好的修行。"
        },
        {
            text: "持志如心痛，一心在痛上，岂有功夫说闲话。",
            source: "《传习录》",
            explanation: "这句话用生动的比喻说明了立志的重要性。坚持志向要像对待心痛一样专注，全部心思都集中在痛处，自然就没有精力去说闲话、做无关紧要的事情。",
            application: "在平静时刻，更要坚定自己的志向，让心神专注于有意义的事情。减少无谓的社交和娱乐，把精力投入到真正重要的事业和修养上。"
        }
    ],
    "焦虑": [
        {
            text: "破山中贼易，破心中贼难。",
            source: "《王阳明全集》",
            explanation: "这句话深刻揭示了内心的烦恼和执着比外在的敌人更难克服。山中的贼寇可以用武力征服，但内心的贪嗔痴慢疑等烦恼，却需要深刻的心性修养才能化解。",
            application: "当你感到焦虑时，认识到焦虑的根源往往来自内心的执着和欲望。试着反观自心，看清焦虑的本质，通过正念觉察和理性分析来化解内心的困扰。"
        },
        {
            text: "省察克治之功，则无时而可间。",
            source: "《传习录》",
            explanation: "王阳明强调自我反省和克制功夫的重要性。省察是时刻观察自己的起心动念，克治是对不良念头进行约束和转化。这种修养功夫在任何时候都不能间断。",
            application: "面对焦虑，要时刻觉察自己的思维模式和情绪反应。当焦虑出现时，不要抗拒，而是冷静观察，分析其来源，然后用理性和智慧来疏导和转化。"
        },
        {
            text: "悔悟是去病之药，然以改之为贵。",
            source: "《传习录》",
            explanation: "悔悟本身就像治疗疾病的药物，但更重要的是通过悔悟来实现真正的改变。光有后悔和觉悟是不够的，关键在于将这种觉悟转化为实际行动的改变。",
            application: "焦虑往往源于对过去错误的悔恨或对未来的担忧。接受悔悟的疗愈作用，但不要沉溺其中，而是将注意力集中在如何从经验中学习并做出积极的改变。"
        },
        {
            text: "凡后生美质，须令晦养厚积。",
            source: "《王阳明全集》",
            explanation: "这句话告诉我们要学会收敛锋芒，默默积累。有才华的人更需要低调行事，在安静中充实自己，厚积薄发，这样才能真正发挥潜能。",
            application: "当焦虑时，不妨放慢节奏，给自己沉淀和积累的时间。不要急于求成，相信厚积薄发的道理，在安静中积蓄力量，时机成熟时自然会有突破。"
        },
        {
            text: "喜怒哀乐本体自是中和的。",
            source: "《传习录》",
            explanation: "王阳明认为人的各种情感本身是自然中正的，问题在于我们执着于这些情绪而产生过度的反应。如果能够保持心灵的平和，情绪自然会回归到平衡状态。",
            application: "焦虑情绪本身是正常的，不要抗拒或压抑它。接受焦虑的存在，但不要被它控制。通过觉察和接纳，让情绪自然流动，内心自然会恢复平静。"
        }
    ],
    "迷茫": [
        {
            text: "知是行的主意，行是知的功夫。",
            source: "《传习录》",
            explanation: "这句话阐明了知与行的辩证关系。知是行动的指南和方向，而行则是将知识付诸实践的过程。真正的知必须通过行来验证和完善，行也必须以知为指导。",
            application: "当迷茫时，不要只停留在思考层面，要敢于行动。在实践中检验自己的想法，通过行动来获得更深刻的理解和方向感。"
        },
        {
            text: "知行合一，方为圣学。",
            source: "《传习录》",
            explanation: "王阳明心学的核心思想之一，强调知识和行动是统一的整体，不可分割。真正的学习必须将理论与实践相结合，在行动中体现真知。",
            application: "迷茫时往往是因为知与行脱节。试着将所学付诸实践，在实践中寻找答案，做到知行合一，迷茫自然会消散。"
        },
        {
            text: "格物者，格其心之物也。",
            source: "《传习录》",
            explanation: "王阳明重新诠释了'格物'的含义，认为格物不是研究外在事物，而是端正内心的念头。通过观察和修正自己的心态来达到对外界事物的正确认识。",
            application: "当你感到迷茫时，向内观察自己的心态和念头。通过调整内心的状态来获得对外界的清晰认识，内心的清明会带来方向的明晰。"
        },
        {
            text: "身之主宰便是心，心之所发便是意。",
            source: "《传习录》",
            explanation: "这句话说明了身心关系，心是身体的主宰，而意念是心的外在表现。通过控制自己的心念，就能够影响整个人的行为和状态。",
            application: "迷茫时要明白，方向来自于内心的清明。通过静心冥想，回归内心的本源，让心灵成为身体的良好向导。"
        },
        {
            text: "故君子必慎其独也。",
            source: "《大学问》",
            explanation: "君子在独处时也要谨慎自己的行为和念头，因为真正的人格修养体现在无人监督的时候。独处时的内心状态最能体现一个人的真实品格。",
            application: "迷茫时要学会与自己独处，在安静中聆听内心的声音。不要依赖外界的喧嚣来逃避思考，真正的答案往往来自深度的自我对话。"
        }
    ],
    "欢喜": [
        {
            text: "乐是心之本体，虽不同于七情之乐，而亦不外于七情之乐。",
            source: "《传习录》",
            explanation: "王阳明认为真正的快乐是心灵的本然状态，不同于普通的情感快乐，但也不脱离情感体验。这种快乐是内心本体的自然流露，清净而持久。",
            application: "在欢喜时刻，要体会到这种快乐不只是外在刺激的结果，而是内心本性的自然呈现。珍惜这份喜悦，但不要执着于它，让喜悦自然流动。"
        },
        {
            text: "至乐无如读书，至要莫如教子。",
            source: "《王阳明全集》",
            explanation: "这句话表达了王阳明对人生重要活动的排序。读书可以获得精神上的极大快乐，而教育子女则是人生最重要的责任，这两者都能带来深层次的满足感。",
            application: "当你感到欢喜时，可以将这份喜悦转化为学习的动力，或者与他人分享你的智慧和经验。真正的喜悦会在给予和成长中得到升华。"
        },
        {
            text: "种树者必培其根，种德者必养其心。",
            source: "《传习录》",
            explanation: "用种树的比喻说明了道德修养的根本方法。种树要培育根部才能枝叶繁茂，修养德行则要从内心开始，心性是德行的根本。",
            application: "在欢喜时刻，更要注重内心的修养，不要让喜悦冲昏头脑。让喜悦成为滋养心性的养分，培养更深层次的内在品质。"
        },
        {
            text: "大丈夫行事，论是非，不论利害。",
            source: "《王阳明全集》",
            explanation: "真正的君子行事只考虑事情的对错，而不计较个人的得失。这种价值观体现了儒家强调的道义原则高于功利考量的精神。",
            application: "欢喜时更要保持清醒的判断力，不要因为心情好就做出违心的事情。坚持原则，按是非标准行事，这才是真正的君子风范。"
        },
        {
            text: "人生大病，只是一傲字。",
            source: "《传习录》",
            explanation: "王阳明认为骄傲自满是人生最大的病根。骄傲会让人失去学习的谦虚，看不到自己的不足，从而阻碍了个人成长和道德完善。",
            application: "当你感到欢喜和成功时，要警惕骄傲情绪的滋生。保持谦虚的心态，继续学习成长，让喜悦成为前进的动力而不是停滞的借口。"
        }
    ],
    "困惑": [
        {
            text: "致吾心之良知于事事物物，则事事物物皆得其理矣。",
            source: "《传习录》",
            explanation: "王阳明认为只要将内心的良知推广到万事万物上，就能理解所有事物的道理。良知是每个人本具的道德直觉和判断力，是认识世界的根本。",
            application: "困惑时回归内心的良知，倾听那个最初的声音。不要被外界的复杂信息所迷惑，相信内心深处的直觉判断。"
        },
        {
            text: "心即理也，天下又有心外之事，心外之理乎？",
            source: "《传习录》",
            explanation: "这句话是心学的核心命题，认为心和理是统一的，不存在独立于心之外的道理。所有的道理都存在于我们的心中，需要通过内心的体悟来获得。",
            application: "困惑时向内求，不要在外界寻找答案。理在心中，通过静思和反省来认识事物的本质，内心的智慧会指引方向。"
        },
        {
            text: "故君子学道，则爱人。",
            source: "《王阳明全集》",
            explanation: "真正的学习不仅仅是知识的积累，更重要的是培养对他人的关爱之心。学习道的最终目的是为了更好地爱人，体现儒家仁爱的核心价值。",
            application: "当你感到困惑时，试着去关心和帮助他人。在付出的过程中，很多困惑会自然消散，爱能带来内心的清明和方向感。"
        },
        {
            text: "夫学问思辨行，皆所以为学，未有学而不行者也。",
            source: "《传习录》",
            explanation: "学习的过程包括学、问、思、辨、行五个环节，但最终必须落实到行动上。没有行动的学习是不完整的，只有通过实践才能真正掌握知识。",
            application: "困惑时不要停留在思考层面，要勇于实践。在行动中检验和修正自己的想法，通过实践来获得真正的理解和成长。"
        },
        {
            text: "诚意只是循天理。",
            source: "《传习录》",
            explanation: "真正的诚意就是按照天理行事，不掺杂个人的私欲和虚假。真诚不是表面的礼貌，而是发自内心地遵循道理和良知。",
            application: "困惑时保持真诚，对自己诚实，对他人真诚。按照良知的指引行事，不要被外界诱惑所动摇，真诚会带来内心的平静和智慧。"
        }
    ],
    "坚定": [
        {
            text: "志不立，天下无可成之事。",
            source: "《教条示龙场诸生》",
            explanation: "这句话强调了立志的重要性。没有坚定的志向，就不可能成就任何事业。志向是人生的指南针，为所有的行动提供方向和动力。",
            application: "当你内心坚定时，更要明确自己的志向，让它成为你行动的指引。坚定的志向能让你在困难面前不退缩，在诱惑面前不动摇。"
        },
        {
            text: "故立志而圣，则圣矣；立志而贤，则贤矣。",
            source: "《教条示龙场诸生》",
            explanation: "王阳明认为人的成就很大程度上取决于其志向的高低。立志成为圣人，就能朝着圣人的方向努力；立志成为贤人，就能朝着贤人的方向发展。志向决定了人生的格局。",
            application: "坚定时刻要树立高远的志向，不要局限于眼前的利益。远大的志向能激发你的潜能，让你在人生道路上走得更远。"
        },
        {
            text: "责善朋友之道，然须忠告而善道之。",
            source: "《传习录》",
            explanation: "帮助朋友改过向善是朋友之道，但需要注意方式方法。要诚恳地提出忠告，同时用善巧的方式来表达，既要真诚又要考虑对方的接受能力。",
            application: "当你内心坚定时，可以用这份坚定来帮助他人。在指出他人不足时，既要真诚又要委婉，用建设性的方式来表达。"
        },
        {
            text: "夫志，气之帅也，人之命也，木之根也，水之源也。",
            source: "《教条示龙场诸生》",
            explanation: "这句话用多个比喻强调了志向的重要性。志向是气的主宰，是人的生命所在，像树木的根、水的源头一样，是一切成就的基础。",
            application: "坚定时刻要滋养自己的志向，让它成为一切行动的源泉。有了坚定的志向，你就有了面对一切挑战的力量和勇气。"
        },
        {
            text: "谦者众善之基，傲者众恶之魁。",
            source: "《传习录》",
            explanation: "谦虚是所有善行的基础，而骄傲是各种恶行的源头。谦虚让人能够接受教导，不断进步；骄傲则让人停滞不前，甚至走向堕落。",
            application: "即使内心坚定，也要保持谦虚的态度。不要因为自己的坚定而轻视他人，真正的坚定包含着对他人的尊重和理解。"
        }
    ]
};

// 全局变量
let selectedMood = null;
let isDrawing = false;

// DOM元素
const moodButtons = document.querySelectorAll('.mood-btn');
const drawBtn = document.getElementById('drawBtn');
const resetBtn = document.getElementById('resetBtn');
const stick = document.getElementById('stick');
const resultSection = document.getElementById('resultSection');
const moodIndicator = document.getElementById('moodIndicator');
const fortuneText = document.getElementById('fortuneText');
const fortuneSource = document.getElementById('fortuneSource');
const drawSection = document.querySelector('.draw-section');

// 新增的DOM元素
const explanationSection = document.getElementById('explanationSection');
const explanationContent = document.getElementById('explanationContent');
const applicationSection = document.getElementById('applicationSection');
const applicationContent = document.getElementById('applicationContent');
const progressSteps = {
    step1: document.getElementById('step1'),
    step2: document.getElementById('step2'),
    step3: document.getElementById('step3')
};

// 海报相关DOM元素
const posterBtn = document.getElementById('posterBtn');
const posterSection = document.getElementById('posterSection');
const posterCanvas = document.getElementById('posterCanvas');
const closePoster = document.getElementById('closePoster');
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const ctx = posterCanvas.getContext('2d');

// 当前海报数据
let currentPosterData = {
    date: '',
    mood: '',
    fortune: '',
    source: '',
    application: ''
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
});

// 初始化事件监听器
function initEventListeners() {
    // 心情选择按钮
    moodButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            createInkRipple(this, e);
            selectMood(this);
        });
    });

    // 抽签按钮
    drawBtn.addEventListener('click', drawFortune);

    // 重置按钮
    resetBtn.addEventListener('click', function(e) {
        createInkRipple(this, e);
        resetFortune();
    });

    // 海报生成按钮
    posterBtn.addEventListener('click', function(e) {
        createInkRipple(this, e);
        generatePoster();
    });

    // 关闭海报
    closePoster.addEventListener('click', closePosterSection);

    // 下载海报
    downloadBtn.addEventListener('click', downloadPoster);

    // 分享海报
    shareBtn.addEventListener('click', sharePoster);

    // 点击背景关闭海报
    posterSection.addEventListener('click', function(e) {
        if (e.target === posterSection) {
            closePosterSection();
        }
    });

    // 解释区域点击事件
    addExplanationClickHandler();

    // 为真言文本添加视觉反馈
    fortuneText.addEventListener('mouseenter', function() {
        if (explanationSection.style.display === 'none') {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform var(--zen-duration-quick) ease';
        }
    });

    fortuneText.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // 为心境按钮添加悬停效果
    moodButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });

        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
}

// 选择心情
function selectMood(button) {
    // 移除其他按钮的选中状态
    moodButtons.forEach(btn => btn.classList.remove('active'));

    // 选中当前按钮
    button.classList.add('active');
    selectedMood = button.dataset.mood;

    // 更新Logo色彩
    updateLogoColor(selectedMood);

    // 启用抽签按钮
    drawBtn.disabled = false;
    drawBtn.textContent = '开始抽签';

    // 隐藏结果区域
    resultSection.style.display = 'none';
    drawSection.style.display = 'block';
}

// 更新Logo色彩
function updateLogoColor(mood) {
    const logoIcon = document.querySelector('.logo-icon');
    const moodColors = {
        '平静': 'var(--mood-calm)',
        '焦虑': 'var(--mood-anxious)',
        '迷茫': 'var(--mood-confused)',
        '欢喜': 'var(--mood-happy)',
        '困惑': 'var(--mood-perplexed)',
        '坚定': 'var(--mood-determined)'
    };

    if (logoIcon && moodColors[mood]) {
        logoIcon.style.background = moodColors[mood];
        logoIcon.style.webkitBackgroundClip = 'text';
        logoIcon.style.webkitTextFillColor = 'transparent';
        logoIcon.style.backgroundClip = 'text';
    }
}

// 抽签功能
function drawFortune() {
    if (isDrawing || !selectedMood) return;

    isDrawing = true;
    drawBtn.disabled = true;
    drawBtn.textContent = '抽签中...';

    // 开始抽签动画
    stick.classList.add('animate');

    // 模拟抽签过程
    setTimeout(() => {
        showFortune();
    }, 2000);
}

// 创建墨水扩散效果
function createInkRipple(element, event) {
    const ripple = document.createElement('div');
    ripple.className = 'ink-ripple';

    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    let x, y;
    if (event && event.type === 'click') {
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    } else {
        x = rect.width / 2;
        y = rect.height / 2;
    }

    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.left = (x - size / 2) + 'px';
    ripple.style.top = (y - size / 2) + 'px';

    // 根据按钮类型设置墨水颜色
    if (element.classList.contains('mood-btn') && element.dataset.mood) {
        const moodColors = {
            '平静': 'rgba(74, 144, 226, 0.4)',
            '焦虑': 'rgba(255, 112, 67, 0.4)',
            '迷茫': 'rgba(126, 87, 194, 0.4)',
            '欢喜': 'rgba(102, 187, 106, 0.4)',
            '困惑': 'rgba(141, 110, 99, 0.4)',
            '坚定': 'rgba(239, 83, 80, 0.4)'
        };
        ripple.style.background = moodColors[element.dataset.mood] || 'rgba(139, 69, 19, 0.3)';
    }

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    // 动画结束后移除元素
    setTimeout(() => {
        ripple.remove();
    }, 800);
}

// 显示结果
function showFortune() {
    // 获取对应心情的真言
    const fortunes = yangmingFortunes[selectedMood];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    // 设置结果显示
    moodIndicator.textContent = `${selectedMood}之时`;
    fortuneText.textContent = randomFortune.text;
    fortuneSource.textContent = `—— ${randomFortune.source}`;

    // 设置解释内容
    explanationContent.textContent = randomFortune.explanation;
    applicationContent.textContent = randomFortune.application;

    // 保存海报数据
    currentPosterData = {
        date: getCurrentDate(),
        mood: selectedMood,
        fortune: randomFortune.text,
        source: randomFortune.source,
        application: randomFortune.application
    };

    // 隐藏抽签区域，显示结果
    drawSection.style.display = 'none';
    resultSection.style.display = 'block';

    // 重置进度和内容区域
    resetProgress();
    explanationSection.style.display = 'none';
    applicationSection.style.display = 'none';

    // 添加毛笔书写效果
    fortuneText.classList.add('writing', 'brush-writing');

    // 添加可点击提示
    addClickHint();

    // 重置状态
    stick.classList.remove('animate');
    isDrawing = false;

    // 启动自动显示解释的定时器
    setTimeout(() => {
        showExplanation();
    }, 2000);
}

// 重置进度指示器
function resetProgress() {
    Object.values(progressSteps).forEach(step => {
        step.classList.remove('active', 'completed');
    });
    progressSteps.step1.classList.add('active');
}

// 显示深度解读
function showExplanation() {
    explanationSection.style.display = 'block';
    updateProgress('step1', 'step2');

    // 移除点击提示
    removeClickHint();
}

// 显示实践指导
function showApplication() {
    applicationSection.style.display = 'block';
    updateProgress('step2', 'step3');
}

// 更新进度指示器
function updateProgress(completedStep, activeStep) {
    progressSteps[completedStep].classList.remove('active');
    progressSteps[completedStep].classList.add('completed');
    progressSteps[activeStep].classList.add('active');
}

// 添加可点击提示
function addClickHint() {
    const hint = document.createElement('div');
    hint.className = 'click-hint';
    hint.textContent = '点击真言查看深度解读';
    hint.id = 'clickHint';

    fortuneText.style.cursor = 'pointer';
    fortuneText.appendChild(hint);

    // 添加点击事件
    fortuneText.addEventListener('click', onFortuneClick);
}

// 移除可点击提示
function removeClickHint() {
    const hint = document.getElementById('clickHint');
    if (hint) {
        hint.remove();
    }
    fortuneText.removeEventListener('click', onFortuneClick);
    fortuneText.style.cursor = 'default';
}

// 真言点击事件
function onFortuneClick() {
    if (explanationSection.style.display === 'none') {
        showExplanation();
    } else if (applicationSection.style.display === 'none') {
        showApplication();
    }
}

// 为解释区域添加点击事件
function addExplanationClickHandler() {
    explanationSection.addEventListener('click', function() {
        if (applicationSection.style.display === 'none') {
            showApplication();
        }
    });
}

// 重置抽签
function resetFortune() {
    // 隐藏结果区域
    resultSection.style.display = 'none';
    drawSection.style.display = 'block';

    // 重置抽签按钮
    drawBtn.disabled = false;
    drawBtn.textContent = '再抽一签';

    // 清除心情选择
    moodButtons.forEach(btn => btn.classList.remove('active'));
    selectedMood = null;
    drawBtn.disabled = true;
    drawBtn.textContent = '请先选择心境';

    // 清理事件监听器
    removeClickHint();
    explanationSection.removeEventListener('click', showApplication);
}

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 键盘快捷键支持
document.addEventListener('keydown', function(e) {
    // 空格键抽签
    if (e.code === 'Space' && selectedMood && !isDrawing) {
        e.preventDefault();
        drawFortune();
    }

    // R键重置
    if (e.code === 'KeyR' && resultSection.style.display !== 'none') {
        e.preventDefault();
        resetFortune();
    }

    // 数字键1-6选择心情
    if (e.code >= 'Digit1' && e.code <= 'Digit6') {
        const index = parseInt(e.code.slice(-1)) - 1;
        if (moodButtons[index]) {
            e.preventDefault();
            selectMood(moodButtons[index]);
        }
    }
});

// 添加触摸设备支持
let touchStartY = 0;
let touchEndY = 0;
let touchStartX = 0;
let touchStartTime = 0;

document.addEventListener('touchstart', function(e) {
    // 只在非输入元素上监听滑动
    if (e.target.closest('button') || e.target.closest('.result-section') || e.target.closest('.poster-section')) {
        return;
    }
    touchStartY = e.changedTouches[0].screenY;
    touchStartX = e.changedTouches[0].screenX;
    touchStartTime = Date.now();
});

document.addEventListener('touchend', function(e) {
    // 只在非输入元素上处理滑动
    if (e.target.closest('button') || e.target.closest('.result-section') || e.target.closest('.poster-section')) {
        return;
    }
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const touchEndTime = Date.now();
    const touchDuration = touchEndTime - touchStartTime;
    const touchDiffY = touchStartY - touchEndY;

    // 增加滑动条件：快速垂直滑动
    if (touchDiffY > 120 && touchDuration < 800) {
        // 向上滑动，如果显示结果则重置
        if (resultSection.style.display !== 'none') {
            // 添加确认机制，避免误触
            if (confirm('确定要重新抽签吗？')) {
                resetFortune();
            }
        }
    }
}

// 添加页面可见性变化处理
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        stick.style.animationPlayState = 'paused';
    } else {
        // 页面显示时恢复动画
        stick.style.animationPlayState = 'running';
    }
});

// 添加错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 用户友好的错误提示
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #f44336;
        color: white;
        padding: 15px;
        border-radius: 4px;
        z-index: 1000;
        font-family: inherit;
    `;
    errorDiv.textContent = '出现错误，请刷新页面重试';
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
});

// 性能优化：使用 requestAnimationFrame 进行动画
function animateStick() {
    if (stick.classList.contains('animate')) {
        requestAnimationFrame(animateStick);
    }
}

// 添加页面卸载提示
window.addEventListener('beforeunload', function(e) {
    if (isDrawing) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// 海报生成功能
// 获取当前日期
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 生成海报
function generatePoster() {
    // 显示海报区域
    posterSection.style.display = 'flex';

    // 绘制海报
    drawPoster();
}

// 绘制海报
function drawPoster() {
    const canvas = posterCanvas;
    const ctx = canvas.getContext('2d');

    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 设置海报背景
    drawPosterBackground(ctx, canvas);

    // 绘制标题区域
    drawPosterHeader(ctx, canvas);

    // 绘制日期
    drawPosterDate(ctx, canvas);

    // 绘制心境
    drawPosterMood(ctx, canvas);

    // 绘制真言内容
    drawPosterFortune(ctx, canvas);

    // 绘制实践项
    drawPosterPractice(ctx, canvas);

    // 绘制底部装饰
    drawPosterFooter(ctx, canvas);
}

// 绘制海报背景
function drawPosterBackground(ctx, canvas) {
    // 宣纸纹理背景
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f9f6f0');
    gradient.addColorStop(0.5, '#f5f2ec');
    gradient.addColorStop(1, '#efe9e0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 添加宣纸纹理
    ctx.globalAlpha = 0.03;
    for (let i = 0; i < canvas.height; i += 2) {
        for (let j = 0; j < canvas.width; j += 2) {
            if (Math.random() > 0.8) {
                ctx.fillStyle = '#8b4513';
                ctx.fillRect(j, i, 1, 1);
            }
        }
    }
    ctx.globalAlpha = 1;

    // 绘制传统边框
    drawTraditionalBorder(ctx, canvas);

    // 四角传统纹样
    drawCornerPatterns(ctx, canvas);

    // 墨色晕染效果
    drawInkWashEffect(ctx, canvas);
}

// 绘制传统边框
function drawTraditionalBorder(ctx, canvas) {
    const margin = 30;
    const borderWidth = 2;

    // 外边框
    ctx.strokeStyle = '#8b4513';
    ctx.lineWidth = borderWidth;
    ctx.strokeRect(margin, margin, canvas.width - margin * 2, canvas.height - margin * 2);

    // 内边框
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(margin + 8, margin + 8, canvas.width - margin * 2 - 16, canvas.height - margin * 2 - 16);
}

// 绘制四角传统纹样
function drawCornerPatterns(ctx, canvas) {
    const margin = 30;
    const patternSize = 40;

    ctx.strokeStyle = '#8b4513';
    ctx.lineWidth = 1.5;

    // 左上角
    drawCornerOrnament(ctx, margin, margin, patternSize, 'tl');
    // 右上角
    drawCornerOrnament(ctx, canvas.width - margin, margin, patternSize, 'tr');
    // 左下角
    drawCornerOrnament(ctx, margin, canvas.height - margin, patternSize, 'bl');
    // 右下角
    drawCornerOrnament(ctx, canvas.width - margin, canvas.height - margin, patternSize, 'br');
}

// 绘制角落装饰
function drawCornerOrnament(ctx, x, y, size, corner) {
    ctx.beginPath();

    switch(corner) {
        case 'tl':
            ctx.moveTo(x, y + size);
            ctx.lineTo(x, y);
            ctx.lineTo(x + size, y);
            break;
        case 'tr':
            ctx.moveTo(x - size, y);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y + size);
            break;
        case 'bl':
            ctx.moveTo(x, y - size);
            ctx.lineTo(x, y);
            ctx.lineTo(x + size, y);
            break;
        case 'br':
            ctx.moveTo(x - size, y);
            ctx.lineTo(x, y);
            ctx.lineTo(x, y - size);
            break;
    }
    ctx.stroke();
}

// 绘制墨色晕染效果
function drawInkWashEffect(ctx, canvas) {
    // 左上角晕染
    const gradient1 = ctx.createRadialGradient(100, 150, 0, 100, 150, 120);
    gradient1.addColorStop(0, 'rgba(139, 69, 19, 0.08)');
    gradient1.addColorStop(1, 'rgba(139, 69, 19, 0)');
    ctx.fillStyle = gradient1;
    ctx.fillRect(0, 0, 200, 250);

    // 右下角晕染
    const gradient2 = ctx.createRadialGradient(canvas.width - 100, canvas.height - 100, 0, canvas.width - 100, canvas.height - 100, 100);
    gradient2.addColorStop(0, 'rgba(139, 69, 19, 0.06)');
    gradient2.addColorStop(1, 'rgba(139, 69, 19, 0)');
    ctx.fillStyle = gradient2;
    ctx.fillRect(canvas.width - 200, canvas.height - 200, 200, 200);
}

// 绘制海报头部
function drawPosterHeader(ctx, canvas) {
    // 印章装饰
    drawSeal(ctx, canvas);

    // 手写风格Logo
    ctx.save();
    ctx.font = 'bold 42px 楷体, KaiTi, serif';
    ctx.fillStyle = '#8b4513';
    ctx.textAlign = 'center';
    // 添加轻微旋转效果
    ctx.translate(canvas.width / 2, 85);
    ctx.rotate(-0.05);
    ctx.fillText('心', 0, 0);
    ctx.restore();

    // 标题 - 手写风格
    ctx.font = 'bold 32px 楷体, KaiTi, serif';
    ctx.fillStyle = '#2c1810';
    ctx.textAlign = 'center';
    ctx.fillText('心学日签', canvas.width / 2, 140);

    // 副标题 - 更细的字体
    ctx.font = '16px 宋体, SimSun, serif';
    ctx.fillStyle = '#666';
    ctx.fillText('每日一心学，日日有真言', canvas.width / 2, 165);
}

// 绘制印章
function drawSeal(ctx, canvas) {
    const sealX = canvas.width - 100;
    const sealY = 80;
    const sealSize = 50;

    // 印章背景
    ctx.fillStyle = '#dc143c';
    roundRect(ctx, sealX, sealY, sealSize, sealSize, 5);
    ctx.fill();

    // 印章文字
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px 楷体, KaiTi, serif';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(sealX + sealSize/2, sealY + sealSize/2);
    ctx.rotate(Math.PI / 4);
    ctx.fillText('心学', 0, -5);
    ctx.fillText('日签', 0, 10);
    ctx.restore();
}

// 绘制日期
function drawPosterDate(ctx, canvas) {
    // 日期背景装饰
    const dateText = currentPosterData.date;
    const textWidth = ctx.measureText(dateText).width;
    const bgWidth = textWidth + 40;
    const bgHeight = 30;
    const bgX = (canvas.width - bgWidth) / 2;
    const bgY = 190;

    // 绘制日期背景
    ctx.fillStyle = 'rgba(139, 69, 19, 0.08)';
    roundRect(ctx, bgX, bgY, bgWidth, bgHeight, 15);
    ctx.fill();

    // 日期文字
    ctx.font = '18px 宋体, SimSun, serif';
    ctx.fillStyle = '#8b4513';
    ctx.textAlign = 'center';
    ctx.fillText(dateText, canvas.width / 2, bgY + 20);
}

// 绘制心境
function drawPosterMood(ctx, canvas) {
    // 心境标签背景
    const moodText = `${currentPosterData.mood}之时`;
    const textWidth = ctx.measureText(moodText).width;
    const padding = 25;
    const badgeWidth = textWidth + padding * 2;
    const badgeHeight = 45;
    const badgeX = (canvas.width - badgeWidth) / 2;
    const badgeY = 250;

    // 获取心境颜色
    const moodColors = {
        '平静': '#4a90e2',
        '焦虑': '#ff7043',
        '迷茫': '#7e57c2',
        '欢喜': '#66bb6a',
        '困惑': '#8d6e63',
        '坚定': '#ef5350'
    };

    // 绘制外边框
    ctx.strokeStyle = moodColors[currentPosterData.mood] || '#8b4513';
    ctx.lineWidth = 2;
    roundRect(ctx, badgeX - 2, badgeY - 2, badgeWidth + 4, badgeHeight + 4, 22);
    ctx.stroke();

    // 绘制圆角矩形背景
    ctx.fillStyle = moodColors[currentPosterData.mood] || '#8b4513';
    roundRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, 20);
    ctx.fill();

    // 添加光泽效果
    const glossGradient = ctx.createLinearGradient(badgeX, badgeY, badgeX, badgeY + badgeHeight/2);
    glossGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    glossGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = glossGradient;
    roundRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight/2, 20);
    ctx.fill();

    // 绘制心境文字
    ctx.fillStyle = 'white';
    ctx.font = 'bold 20px 楷体, KaiTi, serif';
    ctx.textAlign = 'center';
    ctx.fillText(moodText, canvas.width / 2, badgeY + 28);

    // 添加小装饰点
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(badgeX + 15, badgeY + badgeHeight/2, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(badgeX + badgeWidth - 15, badgeY + badgeHeight/2, 3, 0, Math.PI * 2);
    ctx.fill();
}

// 绘制真言内容
function drawPosterFortune(ctx, canvas) {
    // 真言区域背景装饰
    const fortuneAreaWidth = canvas.width - 120;
    const fortuneAreaHeight = 140;
    const fortuneX = (canvas.width - fortuneAreaWidth) / 2;
    const fortuneY = 320;

    // 绘制真言区域背景
    ctx.fillStyle = 'rgba(139, 69, 19, 0.02)';
    roundRect(ctx, fortuneX, fortuneY, fortuneAreaWidth, fortuneAreaHeight, 12);
    ctx.fill();

    // 绘制左右装饰线
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(fortuneX + 20, fortuneY + 20);
    ctx.lineTo(fortuneX + 20, fortuneY + fortuneAreaHeight - 20);
    ctx.moveTo(fortuneX + fortuneAreaWidth - 20, fortuneY + 20);
    ctx.lineTo(fortuneX + fortuneAreaWidth - 20, fortuneY + fortuneAreaHeight - 20);
    ctx.stroke();

    // 主要真言 - 更大的字体
    ctx.font = 'bold 32px 宋体, SimSun, serif';
    ctx.fillStyle = '#1a1a1a';
    ctx.textAlign = 'center';

    // 处理长文本换行
    const maxWidth = canvas.width - 160;
    const lines = wrapText(ctx, currentPosterData.fortune, maxWidth);
    const lineHeight = 42;
    const startY = fortuneY + 35;

    lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, startY + index * lineHeight);
    });

    // 出处 - 更优雅的设计
    const sourceY = startY + lines.length * lineHeight + 15;
    ctx.font = 'italic 16px 宋体, SimSun, serif';
    ctx.fillStyle = '#8b4513';
    ctx.fillText('—— ' + currentPosterData.source, canvas.width / 2, sourceY);

    // 添加装饰性元素
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.font = '20px serif';
    ctx.fillText('❞', fortuneX + 10, fortuneY + 35);
    ctx.fillText('❝', fortuneX + fortuneAreaWidth - 25, startY + lines.length * lineHeight);
}

// 绘制海报实践项
function drawPosterPractice(ctx, canvas) {
    if (!currentPosterData.application) return;

    // 实践项区域设计
    const startY = 500;
    const padding = 20;
    const maxWidth = canvas.width - 140;
    const titleHeight = 35;
    const contentHeight = 70;
    const boxWidth = maxWidth;
    const boxX = (canvas.width - boxWidth) / 2;
    const boxY = startY;

    // 绘制外边框
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.lineWidth = 1;
    roundRect(ctx, boxX - 2, boxY - 2, boxWidth + 4, titleHeight + contentHeight + 15, 10);
    ctx.stroke();

    // 绘制实践项背景框 - 渐变效果
    const practiceGradient = ctx.createLinearGradient(boxX, boxY, boxX, boxY + titleHeight + contentHeight + 15);
    practiceGradient.addColorStop(0, 'rgba(139, 69, 19, 0.05)');
    practiceGradient.addColorStop(1, 'rgba(139, 69, 19, 0.02)');
    ctx.fillStyle = practiceGradient;
    roundRect(ctx, boxX, boxY, boxWidth, titleHeight + contentHeight + 15, 8);
    ctx.fill();

    // 绘制实践项标题背景
    ctx.fillStyle = 'rgba(139, 69, 19, 0.8)';
    roundRect(ctx, boxX, boxY, boxWidth, titleHeight, 8);
    ctx.fill();

    // 绘制实践项标题
    ctx.fillStyle = 'white';
    ctx.font = 'bold 16px 楷体, KaiTi, serif';
    ctx.textAlign = 'center';
    ctx.fillText('实践项', canvas.width / 2, boxY + 22);

    // 绘制实践项内容
    ctx.font = '14px 宋体, SimSun, serif';
    ctx.fillStyle = '#2c1810';
    const practiceLines = wrapText(ctx, currentPosterData.application, maxWidth - 30);
    const lineHeight = 18;

    practiceLines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, boxY + titleHeight + 20 + index * lineHeight);
    });

    // 绘制冥想建议 - 更优雅的设计
    const meditationY = boxY + titleHeight + contentHeight + 25;

    // 冥想图标
    ctx.font = '18px serif';
    ctx.fillStyle = '#8b4513';
    ctx.fillText('🧘‍♀️', (canvas.width - 200) / 2, meditationY);

    // 冥想文字
    ctx.font = '13px 宋体, SimSun, serif';
    ctx.fillStyle = '#666';
    ctx.textAlign = 'left';
    const meditationText = '建议：静心冥想3分钟，体会此实践';
    ctx.fillText(meditationText, (canvas.width - 200) / 2 + 25, meditationY);
}

// 绘制海报底部
function drawPosterFooter(ctx, canvas) {
    // 底部装饰区域
    const footerY = canvas.height - 120;

    // 绘制底部装饰线 - 双线设计
    ctx.strokeStyle = '#8b4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.25, footerY);
    ctx.lineTo(canvas.width * 0.75, footerY);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(canvas.width * 0.25, footerY + 8);
    ctx.lineTo(canvas.width * 0.75, footerY + 8);
    ctx.stroke();

    // 底部格言 - 书法风格
    ctx.font = '15px 楷体, KaiTi, serif';
    ctx.fillStyle = '#8b4513';
    ctx.textAlign = 'center';
    ctx.fillText('致良知 · 知行合一 · 格物致知', canvas.width / 2, footerY + 35);

    // 底部装饰印章
    drawSmallSeal(ctx, canvas, 80, canvas.height - 90);

    // 二维码区域 - 更优雅的设计
    const qrSize = 70;
    const qrX = canvas.width - qrSize - 40;
    const qrY = canvas.height - qrSize - 30;

    // 二维码背景
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    roundRect(ctx, qrX - 5, qrY - 5, qrSize + 10, qrSize + 10, 8);
    ctx.fill();
    ctx.stroke();

    // 二维码占位符（可以用实际二维码替换）
    ctx.fillStyle = '#f0f0f0';
    roundRect(ctx, qrX, qrY, qrSize, qrSize, 5);
    ctx.fill();

    // 二维码说明文字
    ctx.fillStyle = '#8b4513';
    ctx.font = '11px 宋体, SimSun, serif';
    ctx.textAlign = 'center';
    ctx.fillText('扫码体验', qrX + qrSize/2, qrY + qrSize + 20);

    // 添加小装饰
    ctx.fillStyle = 'rgba(139, 69, 19, 0.2)';
    ctx.font = '12px serif';
    ctx.fillText('❖', canvas.width * 0.25 - 20, footerY + 5);
    ctx.fillText('❖', canvas.width * 0.75 + 15, footerY + 5);
}

// 绘制小印章
function drawSmallSeal(ctx, canvas, x, y) {
    const sealSize = 35;

    // 印章背景
    ctx.fillStyle = 'rgba(220, 20, 60, 0.8)';
    roundRect(ctx, x, y, sealSize, sealSize, 3);
    ctx.fill();

    // 印章文字
    ctx.fillStyle = 'white';
    ctx.font = 'bold 10px 楷体, KaiTi, serif';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(x + sealSize/2, y + sealSize/2);
    ctx.rotate(Math.PI / 4);
    ctx.fillText('心', -5, -3);
    ctx.fillText('学', 5, -3);
    ctx.fillText('修', -5, 8);
    ctx.fillText('行', 5, 8);
    ctx.restore();
}

// 圆角矩形辅助函数
function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
}

// 文本换行函数
function wrapText(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + words[i];
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && i > 0) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine);
    return lines;
}

// 关闭海报区域
function closePosterSection() {
    posterSection.style.display = 'none';
}

// 下载海报
function downloadPoster() {
    const link = document.createElement('a');
    const fileName = `心学日签_${currentPosterData.date}_${currentPosterData.mood}.png`;
    link.download = fileName;
    link.href = posterCanvas.toDataURL();
    link.click();
}

// 分享海报
function sharePoster() {
    // 检查是否支持Web Share API
    if (navigator.share) {
        posterCanvas.toBlob(function(blob) {
            const file = new File([blob], '心学日签.png', { type: 'image/png' });

            navigator.share({
                title: '心学日签',
                text: `今日心境：${currentPosterData.mood}\n${currentPosterData.fortune}`,
                files: [file]
            }).catch(err => console.log('分享失败:', err));
        });
    } else {
        // 不支持分享API时，提示用户下载
        alert('您的浏览器不支持分享功能，请使用下载功能保存海报。');
    }
}