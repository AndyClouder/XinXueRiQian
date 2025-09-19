// 阳明心学真言数据库
const yangmingFortunes = {
    "平静": [
        {
            text: "心外无物，心外无事，心外无理。",
            source: "《传习录》"
        },
        {
            text: "静处体悟，事上磨炼。",
            source: "《传习录》"
        },
        {
            text: "此心不动，随机而动。",
            source: "《王阳明全集》"
        },
        {
            text: "人须在事上磨练做功夫，乃有益。",
            source: "《传习录》"
        },
        {
            text: "持志如心痛，一心在痛上，岂有功夫说闲话。",
            source: "《传习录》"
        }
    ],
    "焦虑": [
        {
            text: "破山中贼易，破心中贼难。",
            source: "《王阳明全集》"
        },
        {
            text: "省察克治之功，则无时而可间。",
            source: "《传习录》"
        },
        {
            text: "悔悟是去病之药，然以改之为贵。",
            source: "《传习录》"
        },
        {
            text: "凡后生美质，须令晦养厚积。",
            source: "《王阳明全集》"
        },
        {
            text: "喜怒哀乐本体自是中和的。",
            source: "《传习录》"
        }
    ],
    "迷茫": [
        {
            text: "知是行的主意，行是知的功夫。",
            source: "《传习录》"
        },
        {
            text: "知行合一，方为圣学。",
            source: "《传习录》"
        },
        {
            text: "格物者，格其心之物也。",
            source: "《传习录》"
        },
        {
            text: "身之主宰便是心，心之所发便是意。",
            source: "《传习录》"
        },
        {
            text: "故君子必慎其独也。",
            source: "《大学问》"
        }
    ],
    "欢喜": [
        {
            text: "乐是心之本体，虽不同于七情之乐，而亦不外于七情之乐。",
            source: "《传习录》"
        },
        {
            text: "至乐无如读书，至要莫如教子。",
            source: "《王阳明全集》"
        },
        {
            text: "种树者必培其根，种德者必养其心。",
            source: "《传习录》"
        },
        {
            text: "大丈夫行事，论是非，不论利害。",
            source: "《王阳明全集》"
        },
        {
            text: "人生大病，只是一傲字。",
            source: "《传习录》"
        }
    ],
    "困惑": [
        {
            text: "致吾心之良知于事事物物，则事事物物皆得其理矣。",
            source: "《传习录》"
        },
        {
            text: "心即理也，天下又有心外之事，心外之理乎？",
            source: "《传习录》"
        },
        {
            text: "故君子学道，则爱人。",
            source: "《王阳明全集》"
        },
        {
            text: "夫学问思辨行，皆所以为学，未有学而不行者也。",
            source: "《传习录》"
        },
        {
            text: "诚意只是循天理。",
            source: "《传习录》"
        }
    ],
    "坚定": [
        {
            text: "志不立，天下无可成之事。",
            source: "《教条示龙场诸生》"
        },
        {
            text: "故立志而圣，则圣矣；立志而贤，则贤矣。",
            source: "《教条示龙场诸生》"
        },
        {
            text: "责善朋友之道，然须忠告而善道之。",
            source: "《传习录》"
        },
        {
            text: "夫志，气之帅也，人之命也，木之根也，水之源也。",
            source: "《教条示龙场诸生》"
        },
        {
            text: "谦者众善之基，傲者众恶之魁。",
            source: "《传习录》"
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

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initEventListeners();
});

// 初始化事件监听器
function initEventListeners() {
    // 心情选择按钮
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectMood(this);
        });
    });

    // 抽签按钮
    drawBtn.addEventListener('click', drawFortune);

    // 重置按钮
    resetBtn.addEventListener('click', resetFortune);
}

// 选择心情
function selectMood(button) {
    // 移除其他按钮的选中状态
    moodButtons.forEach(btn => btn.classList.remove('active'));

    // 选中当前按钮
    button.classList.add('active');
    selectedMood = button.dataset.mood;

    // 启用抽签按钮
    drawBtn.disabled = false;
    drawBtn.textContent = '开始抽签';

    // 隐藏结果区域
    resultSection.style.display = 'none';
    drawSection.style.display = 'block';
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

// 显示结果
function showFortune() {
    // 获取对应心情的真言
    const fortunes = yangmingFortunes[selectedMood];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

    // 设置结果显示
    moodIndicator.textContent = `${selectedMood}之时`;
    fortuneText.textContent = randomFortune.text;
    fortuneSource.textContent = `—— ${randomFortune.source}`;

    // 隐藏抽签区域，显示结果
    drawSection.style.display = 'none';
    resultSection.style.display = 'block';

    // 重置状态
    stick.classList.remove('animate');
    isDrawing = false;
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

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndY < touchStartY - 50) {
        // 向上滑动，如果显示结果则重置
        if (resultSection.style.display !== 'none') {
            resetFortune();
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