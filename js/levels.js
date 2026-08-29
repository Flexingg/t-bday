// 30 Levels for T-Bday: The Impossible Birthday Quiz
window.LEVELS = [];

window.LEVELS.push(
    // LEVEL 1: Hidden Candle in Badge
    {
        id: 1,
        title: "Question 1",
        question: "How many candles are on this birthday cake?",
        type: "interactive",
        hint: "Look closely at the screen elements!",
        html: `
            <div class="interactive-stage text-center">
                <div style="font-size: 85px; margin: 15px 0; user-select: none;">🎂</div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 15px;">
                    <button class="quiz-btn fake-opt">10 Candles</button>
                    <button class="quiz-btn fake-opt">5 Candles</button>
                    <button class="quiz-btn fake-opt">None (Digital)</button>
                    <button class="quiz-btn fake-opt">100 Candles</button>
                </div>
            </div>
        `,
        setup: (container, game) => {
            container.querySelectorAll('.fake-opt').forEach(btn => {
                btn.onclick = () => game.loseLife("Nope! Look at the candle in the Level 1 badge!");
            });
            const badge = document.getElementById('level-display');
            if (badge) {
                badge.style.cursor = 'pointer';
                const orig = badge.innerHTML;
                badge.innerHTML = `⭐ Level <span id="level-num" style="color:#ffeb3b; text-decoration: underline;">1 🕯️</span> / 30`;
                badge.onclick = () => {
                    badge.onclick = null;
                    badge.innerHTML = orig;
                    game.solveLevel("Aha! You found the candle in the Level 1 badge!");
                };
                game.cleanupListeners.push(() => {
                    badge.onclick = null;
                    badge.innerHTML = orig;
                });
            }
        }
    },

    // LEVEL 2: Visual Size Trick
    {
        id: 2,
        title: "Question 2",
        question: "Click the LARGEST gift box!",
        type: "choice",
        hint: "Literal vs Semantic size...",
        options: [
            { text: "<span style='font-size: 18px;'>🎁 Tiny</span>", correct: false, msg: "That is tiny!" },
            { text: "<span style='font-size: 28px;'>🎁 Medium</span>", correct: false, msg: "Not the largest!" },
            { text: "<span style='font-size: 24px; font-weight: 900; letter-spacing: 2px; color:#ff4081;'>GIFT BOX</span>", correct: true, msg: "Literal typography wins every time!" },
            { text: "<span style='font-size: 38px;'>🎁 Big</span>", correct: false, msg: "The words 'GIFT BOX' take up way more area!" }
        ]
    },

    // LEVEL 3: Bizarre Obscure History Trivia
    {
        id: 3,
        title: "Question 3",
        question: "In 1325, a brutal 12-year war broke out between Bologna and Modena over what stolen object?",
        type: "choice",
        hint: "Medieval Italian drama...",
        options: [
            { text: "A solid gold communion chalice", correct: false, msg: "Nope, too dignified." },
            { text: "A wooden oak water bucket", correct: true, msg: "Historical fact! The War of the Oaken Bucket!" },
            { text: "The Pope prized hunting hound", correct: false, msg: "Nope, not a dog!" },
            { text: "An 80-pound wheel of Parmigiano", correct: false, msg: "Delicious, but false!" }
        ]
    },

    // LEVEL 4: Bomb Timer / Self Control Trap
    {
        id: 4,
        title: "Question 4",
        question: "DO NOT CLICK THE RED BUTTON!",
        type: "interactive",
        timer: 7,
        hint: "Resist the urge...",
        html: `
            <div class="interactive-stage text-center">
                <button id="red-trap" class="big-red-btn pulse-anim">🔴 DO NOT CLICK ME 🔴</button>
                <div style="margin-top: 15px; font-size: 14px; color: #ffeb3b; font-weight: bold;">⏳ Defusal through patience...</div>
            </div>
        `,
        setup: (container, game) => {
            const btn = container.querySelector('#red-trap');
            btn.onclick = () => game.loseLife("You were told NOT to click it!");
            game.customTimerCallback = () => {
                game.solveLevel("You resisted temptation! Master of discipline!");
            };
        }
    },

    // LEVEL 5: Drag and Drop Wordplay
    {
        id: 5,
        title: "Question 5",
        question: "Put the <span id='drag-cat' style='color:#00e5ff; text-decoration: underline; cursor: grab;'>cat</span> in the <span id='drop-hat' style='color:#ffd700; border: 2px dashed #ffd700; padding: 2px 6px; border-radius: 6px; cursor: pointer;'>party hat</span>.",
        type: "interactive",
        hint: "Click 'cat' then click 'party hat'!",
        html: `
            <div class="interactive-stage text-center">
                <div style="display: flex; justify-content: space-around; align-items: center; margin: 20px 0;">
                    <div id="img-cat" style="font-size: 65px; cursor: pointer;">🐱</div>
                    <div id="img-hat" style="font-size: 65px;">🥳</div>
                </div>
                <div style="font-size: 13px; opacity: 0.8;">(Click word 'cat', then click 'party hat'!)</div>
            </div>
        `,
        setup: (container, game) => {
            const imgCat = container.querySelector('#img-cat');
            imgCat.onclick = () => game.loseLife("The cat hissed! Click the actual word 'cat' above!");
            const wordCat = document.querySelector('#drag-cat');
            const wordHat = document.querySelector('#drop-hat');
            let selected = false;
            if (wordCat && wordHat) {
                wordCat.onclick = () => {
                    selected = true;
                    wordCat.style.background = "#ff4081";
                    wordCat.style.color = "#fff";
                    window.sound.playClick();
                };
                wordHat.onclick = () => {
                    if (selected) {
                        game.solveLevel("Purr-fect! You put the word 'cat' in the 'party hat'!");
                    } else {
                        game.loseLife("Click the word 'cat' first!");
                    }
                };
            }
        }
    },

    // LEVEL 6: Bizarre Absurdist Math
    {
        id: 6,
        title: "Question 6",
        question: "What is the mathematical square root of an onion?",
        type: "choice",
        hint: "Botanical algebra...",
        options: [
            { text: "2.71828", correct: false, msg: "That is Euler's constant!" },
            { text: "Shallots", correct: true, msg: "Splapp-me-do logic: √Onion = Shallots!" },
            { text: "Tears", correct: false, msg: "Tears are the emotional remainder." },
            { text: "Garlic Clove", correct: false, msg: "Wrong botanical family!" }
        ]
    },

    // LEVEL 7: Cursor Maze Navigation
    {
        id: 7,
        title: "Question 7",
        question: "Guide your cursor along the track to the Cake without touching the red zone!",
        type: "interactive",
        hint: "Stay in the gray path, or click the cake directly!",
        html: `
            <div id="maze-track-box" style="position: relative; width: 100%; height: 180px; background: #050505; border-radius: 12px; overflow: hidden;">
                <div id="maze-top-zone" style="position: absolute; top: 0; left: 0; width: 100%; height: 65px; background: #d32f2f; opacity: 0.85;"></div>
                <div id="maze-bot-zone" style="position: absolute; bottom: 0; left: 0; width: 100%; height: 65px; background: #d32f2f; opacity: 0.85;"></div>
                <div id="maze-lane" style="position: absolute; top: 65px; left: 0; width: 100%; height: 50px; background: #333; display: flex; align-items: center; justify-content: space-between; padding: 0 15px;">
                    <div id="mz-start" style="background:#4caf50; color:#fff; font-size:12px; font-weight:900; padding:6px 12px; border-radius:20px; cursor:pointer;">START HERE</div>
                    <div id="mz-cake" style="font-size:35px; cursor:pointer;">🎂</div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            let active = false;
            const start = container.querySelector('#mz-start');
            const cake = container.querySelector('#mz-cake');
            const topZ = container.querySelector('#maze-top-zone');
            const botZ = container.querySelector('#maze-bot-zone');
            start.onmouseenter = () => { active = true; start.style.boxShadow = "0 0 12px #76ff03"; };
            const triggerWall = () => { if (active) { active = false; game.loseLife("You touched the red zone!"); } };
            topZ.onmouseenter = triggerWall;
            botZ.onmouseenter = triggerWall;
            cake.onmouseenter = () => { if (active) game.solveLevel("Smooth navigation! Cake secured!"); };
            cake.onclick = () => game.solveLevel("Direct click shortcut! Valid quiz tactic!");
        }
    },

    // LEVEL 8: Bizarre Incredibly Difficult Biology
    {
        id: 8,
        title: "Question 8",
        question: "Which organism can naturally survive having over 65% of its total body water frozen into solid ice during winter?",
        type: "choice",
        hint: "Stops heart and thaws in spring...",
        options: [
            { text: "Rana sylvatica (Alaskan Wood Frog)", correct: true, msg: "100% biological fact! Wood frogs freeze solid and revive in spring!" },
            { text: "Emperor Penguin Chick", correct: false, msg: "Nope, they huddle for warmth." },
            { text: "Siberian Wolverine", correct: false, msg: "Mammals cannot survive freezing solid!" },
            { text: "Greenland Halibut", correct: false, msg: "Antifreeze proteins protect fish, but they do not freeze solid." }
        ]
    },

    // LEVEL 9: Reflex Escaping Balloon
    {
        id: 9,
        title: "Question 9",
        question: "Catch the runaway birthday balloon before it escapes into orbit!",
        type: "interactive",
        hint: "Corner it against the walls!",
        html: `
            <div id="balloon-box" style="position: relative; width: 100%; height: 190px; background: rgba(0,0,0,0.25); border-radius: 12px; overflow: hidden;">
                <div id="fast-balloon" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 48px; cursor: pointer; transition: all 0.12s ease-out; user-select: none;">🎈</div>
            </div>
        `,
        setup: (container, game) => {
            const b = container.querySelector('#fast-balloon');
            const box = container.querySelector('#balloon-box');
            let escapes = 0;
            const dodge = () => {
                if (escapes >= 4) { b.style.filter = "drop-shadow(0 0 12px gold)"; return; }
                escapes++;
                window.sound.playBoing();
                const maxX = box.clientWidth - 70;
                const maxY = box.clientHeight - 70;
                b.style.left = Math.max(10, Math.floor(Math.random() * maxX)) + "px";
                b.style.top = Math.max(10, Math.floor(Math.random() * maxY)) + "px";
                b.style.transform = "none";
            };
            b.onmouseenter = dodge;
            b.onclick = () => game.solveLevel("POP! Runaway balloon captured!");
        }
    },

    // LEVEL 10: Keyboard Input Challenge
    {
        id: 10,
        title: "Question 10",
        question: "Quick! Spell 'BIRTHDAY' backwards on your keyboard!",
        type: "interactive",
        timer: 14,
        hint: "Type: Y-A-D-H-T-R-I-B",
        html: `
            <div class="interactive-stage text-center">
                <div id="typed-zone" style="font-family: var(--font-pixel); font-size: 26px; letter-spacing: 4px; color: #00e5ff; min-height: 44px; margin: 15px auto; border-bottom: 3px solid #00e5ff; width: 85%;">_ _ _ _ _ _ _ _</div>
                <div style="font-size: 13px; opacity: 0.8; margin-bottom: 10px;">Type on keyboard or tap virtual keys:</div>
                <div id="vk-keys" style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
                    <button class="quiz-btn vk-k">Y</button><button class="quiz-btn vk-k">A</button><button class="quiz-btn vk-k">D</button><button class="quiz-btn vk-k">H</button><button class="quiz-btn vk-k">T</button><button class="quiz-btn vk-k">R</button><button class="quiz-btn vk-k">I</button><button class="quiz-btn vk-k">B</button>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const target = "YADHTRIB";
            let typed = "";
            const display = container.querySelector('#typed-zone');
            const refresh = () => {
                display.innerText = typed.padEnd(8, '_').split('').join(' ');
                if (typed === target) {
                    window.removeEventListener('keydown', onKey);
                    game.solveLevel("YADHTRIB! Birthday reversed!");
                } else if (typed.length >= 8) {
                    window.sound.playWrong();
                    typed = "";
                    display.innerText = "_ _ _ _ _ _ _ _";
                }
            };
            const onKey = (e) => {
                const k = e.key.toUpperCase();
                if (/^[A-Z]$/.test(k)) { typed += k; window.sound.playClick(); refresh(); }
                else if (e.key === 'Backspace') { typed = typed.slice(0, -1); refresh(); }
            };
            window.addEventListener('keydown', onKey);
            game.cleanupListeners.push(() => window.removeEventListener('keydown', onKey));
            container.querySelectorAll('.vk-k').forEach(b => {
                b.onclick = () => { typed += b.innerText; window.sound.playClick(); refresh(); };
            });
        }
    }
);


window.LEVELS.push(
    // LEVEL 11: Dark Flashlight Exploration
    {
        id: 11,
        title: "Question 11",
        question: "Blackout! Find and light the secret birthday match in the dark room!",
        type: "interactive",
        hint: "Hover around with your mouse to illuminate...",
        html: `
            <div id="flash-room" style="position: relative; width: 100%; height: 200px; background: #050505; border-radius: 12px; cursor: crosshair; overflow: hidden;">
                <div id="spotlight" style="position: absolute; width: 140px; height: 140px; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(255,255,220,0.7) 0%, rgba(255,255,220,0) 70%); transform: translate(-50%, -50%); display: none;"></div>
                <div id="secret-match" style="position: absolute; left: 78%; top: 30%; font-size: 32px; cursor: pointer; opacity: 0.05; transition: opacity 0.2s;">🔥</div>
            </div>
        `,
        setup: (container, game) => {
            const room = container.querySelector('#flash-room');
            const spot = container.querySelector('#spotlight');
            const match = container.querySelector('#secret-match');
            room.onmouseenter = () => spot.style.display = 'block';
            room.onmouseleave = () => spot.style.display = 'none';
            room.onmousemove = (e) => {
                const rect = room.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                spot.style.left = x + 'px';
                spot.style.top = y + 'px';
                const mRect = match.getBoundingClientRect();
                const mx = mRect.left - rect.left + 16;
                const my = mRect.top - rect.top + 16;
                const d = Math.hypot(x - mx, y - my);
                match.style.opacity = d < 70 ? '1' : '0.05';
            };
            match.onclick = () => game.solveLevel("Flame ignited! The party is saved!");
        }
    },

    // LEVEL 12: Bizarre Obscure Astronomy Trivia
    {
        id: 12,
        title: "Question 12",
        question: "On the gas giant Saturn and its neighbor Jupiter, atmospheric pressure and methane combine to cause what bizarre precipitation phenomenon?",
        type: "choice",
        hint: "Extremely luxurious weather...",
        options: [
            { text: "Liquid Nitrogen Hail", correct: false, msg: "Too cold for nitrogen!" },
            { text: "Hailstorms of Solid Diamonds", correct: true, msg: "Astrophysics verified! Atmospheric methane is crushed into ~10 million tons of falling diamonds each year!" },
            { text: "Sulfuric Acid Tornadoes", correct: false, msg: "That is Venus, not Jupiter/Saturn." },
            { text: "Frozen Ethanol Snow", correct: false, msg: "Nope!" }
        ]
    },

    // LEVEL 13: Bomb Falling Cake Catcher
    {
        id: 13,
        title: "Question 13",
        question: "CATCH THE FALLING CAKE BEFORE IT HITS THE FLOOR!",
        type: "interactive",
        timer: 7,
        hint: "Move the plate directly under the falling cake!",
        html: `
            <div id="drop-arena" style="position: relative; width: 100%; height: 210px; background: rgba(0,0,0,0.3); border-radius: 12px; overflow: hidden;">
                <div id="drop-cake" style="position: absolute; left: 50%; top: 10px; font-size: 42px; transform: translateX(-50%);">🎂</div>
                <div id="move-plate" style="position: absolute; left: 50%; bottom: 10px; width: 95px; height: 26px; background: #00e5ff; border: 3px solid #fff; border-radius: 14px; transform: translateX(-50%); cursor: grab; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 900; color: #000;">PLATE</div>
            </div>
        `,
        setup: (container, game) => {
            const arena = container.querySelector('#drop-arena');
            const cake = container.querySelector('#drop-cake');
            const plate = container.querySelector('#move-plate');
            const startX = Math.floor(Math.random() * (arena.clientWidth - 90)) + 45;
            cake.style.left = startX + "px";
            let cy = 10;
            let caught = false;
            const dropTimer = setInterval(() => {
                if (caught) { clearInterval(dropTimer); return; }
                cy += 2.0;
                cake.style.top = cy + "px";
                const cRect = cake.getBoundingClientRect();
                const pRect = plate.getBoundingClientRect();
                if (cRect.bottom >= pRect.top && cRect.top <= pRect.bottom && cRect.right >= pRect.left && cRect.left <= pRect.right) {
                    caught = true;
                    clearInterval(dropTimer);
                    window.sound.playCorrect();
                    game.solveLevel("PERFECT CATCH! Cake safely plated!");
                    return;
                }
                if (cy > arena.clientHeight - 45) {
                    clearInterval(dropTimer);
                    window.sound.playExplosion();
                    game.loseLife("SPLAT! Cake dropped on the floor!");
                }
            }, 20);
            game.cleanupListeners.push(() => clearInterval(dropTimer));
            arena.onmousemove = (e) => {
                const rect = arena.getBoundingClientRect();
                const x = e.clientX - rect.left;
                plate.style.left = Math.max(50, Math.min(arena.clientWidth - 50, x)) + 'px';
            };
        }
    },

    // LEVEL 14: Smallest Dot Punctuation Trick
    {
        id: 14,
        title: "Question 14",
        question: "Click the smallest dot on this screen.",
        type: "interactive",
        hint: "Check the period at the end of the sentence!",
        html: `
            <div class="interactive-stage text-center">
                <div style="display: flex; justify-content: space-around; align-items: center; margin: 25px 0;">
                    <div class="f-dot" style="width: 36px; height: 36px; background: #e91e63; border-radius: 50%; cursor: pointer;"></div>
                    <div class="f-dot" style="width: 22px; height: 22px; background: #00bcd4; border-radius: 50%; cursor: pointer;"></div>
                    <div class="f-dot" style="width: 12px; height: 12px; background: #4caf50; border-radius: 50%; cursor: pointer;"></div>
                </div>
                <div id="target-period" style="display: inline-block; font-size: 28px; color: #ffd700; cursor: pointer; font-weight: 900; padding: 4px 10px;" title="Click me!">.</div>
            </div>
        `,
        setup: (container, game) => {
            container.querySelectorAll('.f-dot').forEach(d => {
                d.onclick = () => game.loseLife("Too big! Not the smallest dot!");
            });
            container.querySelector('#target-period').onclick = () => {
                game.solveLevel("Sharp eyes! The period was the smallest dot!");
            };
        }
    },

    // LEVEL 15: Feed the Birthday Boy
    {
        id: 15,
        title: "Question 15",
        question: "Feed T until he's completely satisfied!",
        type: "interactive",
        hint: "Feed all the snacks then click the mouth!",
        html: `
            <div class="interactive-stage text-center">
                <div id="feed-mouth" style="font-size: 80px; margin: 10px 0; user-select: none; transition: transform 0.2s;">😮</div>
                <div id="snacks" style="display: flex; gap: 18px; justify-content: center; font-size: 40px;">
                    <span class="snack-item" style="cursor: pointer;">🍕</span>
                    <span class="snack-item" style="cursor: pointer;">🍔</span>
                    <span class="snack-item" style="cursor: pointer;">🌮</span>
                </div>
                <div id="snack-meter" style="margin-top: 15px; font-weight: bold; color: #ff9100;">Fullness: 0%</div>
            </div>
        `,
        setup: (container, game) => {
            const mouth = container.querySelector('#feed-mouth');
            const items = container.querySelectorAll('.snack-item');
            const meter = container.querySelector('#snack-meter');
            let fed = 0;
            items.forEach(item => {
                item.onclick = () => {
                    if (item.style.display !== 'none') {
                        item.style.display = 'none';
                        fed++;
                        window.sound.playBoing();
                        mouth.style.transform = "scale(1.2)";
                        setTimeout(() => mouth.style.transform = "scale(1)", 200);
                        if (fed === 3) {
                            mouth.innerText = "😋";
                            meter.innerText = "Fullness: 100%! Tap T's mouth to finish!";
                            meter.style.color = "#76ff03";
                            mouth.style.cursor = 'pointer';
                            mouth.onclick = () => {
                                mouth.innerText = "😎";
                                game.solveLevel("Delicious! T is fully energized!");
                            };
                        } else {
                            meter.innerText = `Fullness: ${fed * 33}%`;
                        }
                    }
                };
            });
        }
    },

    // LEVEL 16: Primary Color Mixing
    {
        id: 16,
        title: "Question 16",
        question: "Press the GREEN button to continue.",
        type: "interactive",
        hint: "Click Blue, then click Yellow to synthesize Green!",
        html: `
            <div class="interactive-stage text-center">
                <div style="display: flex; justify-content: center; gap: 18px; margin: 25px 0;">
                    <button id="p-blue" class="quiz-btn" style="background: #2196f3; color: white;">BLUE</button>
                    <button id="p-yellow" class="quiz-btn" style="background: #ffeb3b; color: #000;">YELLOW</button>
                    <button id="p-red" class="quiz-btn" style="background: #f44336; color: white;">RED</button>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const blue = container.querySelector('#p-blue');
            const yellow = container.querySelector('#p-yellow');
            const red = container.querySelector('#p-red');
            red.onclick = () => game.loseLife("Red is definitely not Green!");
            let blueArmed = false;
            blue.onclick = () => {
                blueArmed = true;
                blue.style.border = "4px solid #fff";
                window.sound.playClick();
                game.showToast("Blue primed! Now mix with Yellow!", "normal");
            };
            yellow.onclick = () => {
                if (blueArmed) {
                    yellow.style.background = "#4caf50";
                    yellow.style.color = "#fff";
                    yellow.innerText = "GREEN (SYNTHESIZED!)";
                    window.sound.playCorrect();
                    setTimeout(() => {
                        game.solveLevel("Color theory mastered! Blue + Yellow = Green!");
                    }, 400);
                } else {
                    game.loseLife("That is Yellow! Mix Blue with it first!");
                }
            };
        }
    },

    // LEVEL 17: Bizarre Obscure History Trivia
    {
        id: 17,
        title: "Question 17",
        question: "When Nintendo was founded in September 1889 in Kyoto, what was their core commercial product?",
        type: "choice",
        hint: "Long before video games...",
        options: [
            { text: "Handcrafted Hanafuda Playing Cards", correct: true, msg: "True! Fusajiro Yamauchi started by selling handmade flower cards!" },
            { text: "Mechanical Clockwork Music Boxes", correct: false, msg: "Nope!" },
            { text: "Silk Kimonos & Parasols", correct: false, msg: "Nope!" },
            { text: "Steam Locomotive Whistles", correct: false, msg: "Nope!" }
        ]
    },

    // LEVEL 18: Birthday Riddle
    {
        id: 18,
        title: "Question 18",
        question: "What goes up every single year on this exact date, but can NEVER come back down?",
        type: "choice",
        hint: "A birthday milestone...",
        options: [
            { text: "Rent & Taxes", correct: false, msg: "True in life, but not the riddle!" },
            { text: "Your Age", correct: true, msg: "Bingo! Happy Birthday, another level higher!" },
            { text: "A Helium Balloon", correct: false, msg: "Balloons eventually pop and fall down!" },
            { text: "Blood Pressure", correct: false, msg: "Hopefully that goes down!" }
        ]
    },

    // LEVEL 19: Bomb Rapid Sequential Tape Strips
    {
        id: 19,
        title: "Question 19",
        question: "UNWRAP THE BIRTHDAY PRESENT! (Click tapes in order: 1 → 2 → 3 → 4)",
        type: "interactive",
        timer: 7,
        hint: "Click 1, 2, 3, 4 before the bomb explodes!",
        html: `
            <div class="interactive-stage text-center">
                <div style="position: relative; width: 190px; height: 160px; margin: 10px auto; background: #e91e63; border-radius: 10px; border: 4px solid #fff;">
                    <div id="tp-1" style="position: absolute; top: 12px; left: 15px; width: 155px; height: 26px; background: #ffd54f; color: #000; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 4px;">TAPE 1</div>
                    <div id="tp-2" style="position: absolute; top: 46px; left: 15px; width: 155px; height: 26px; background: #ffd54f; color: #000; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 4px;">TAPE 2</div>
                    <div id="tp-3" style="position: absolute; top: 80px; left: 15px; width: 155px; height: 26px; background: #ffd54f; color: #000; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 4px;">TAPE 3</div>
                    <div id="tp-4" style="position: absolute; top: 114px; left: 15px; width: 155px; height: 26px; background: #ffd54f; color: #000; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; border-radius: 4px;">TAPE 4</div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            let step = 1;
            for (let i = 1; i <= 4; i++) {
                const tape = container.querySelector('#tp-' + i);
                tape.onclick = () => {
                    if (i === step) {
                        tape.style.visibility = 'hidden';
                        window.sound.playBoing();
                        step++;
                        if (step === 5) {
                            game.solveLevel("Present unwrapped with ninja speed!");
                        }
                    } else {
                        game.loseLife(`Wrong order! You were supposed to click Tape ${step}!`);
                    }
                };
            }
        }
    },

    // LEVEL 20: Invisible Pull-Chain Switch
    {
        id: 20,
        title: "Question 20",
        question: "Who turned off the lights?! Find the hanging light chain!",
        type: "interactive",
        hint: "Search the top center of the dark box...",
        html: `
            <div id="v-dark" style="position: relative; width: 100%; height: 180px; background: #000; border-radius: 10px; overflow: hidden;">
                <div id="pull-chain" style="position: absolute; top: 0; left: 50%; width: 24px; height: 75px; cursor: pointer; display: flex; flex-direction: column; align-items: center; opacity: 0.15; transition: opacity 0.2s;">
                    <div style="width: 3px; height: 50px; background: #aaa;"></div>
                    <div style="width: 16px; height: 16px; background: #ffd700; border-radius: 50%;"></div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const chain = container.querySelector('#pull-chain');
            const box = container.querySelector('#v-dark');
            chain.onmouseenter = () => chain.style.opacity = '1';
            chain.onmouseleave = () => chain.style.opacity = '0.15';
            chain.onclick = () => {
                box.style.background = '#fff59d';
                window.sound.playCorrect();
                game.solveLevel("CLICK! Let there be birthday light!");
            };
        }
    }
);


window.LEVELS.push(
    // LEVEL 21: Simon Says Trick
    {
        id: 21,
        title: "Question 21",
        question: "<span id='s-prompt' style='color:#00e5ff;'>Simon Says: Click the BLUE button!</span>",
        type: "interactive",
        hint: "Only click when Simon says...",
        html: `
            <div class="interactive-stage text-center">
                <div style="display: flex; justify-content: center; gap: 16px; margin: 25px 0;">
                    <button id="s-blue" class="quiz-btn" style="background:#2196f3;">BLUE</button>
                    <button id="s-red" class="quiz-btn" style="background:#f44336;">RED</button>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const prompt = container.querySelector('#s-prompt');
            const blue = container.querySelector('#s-blue');
            const red = container.querySelector('#s-red');
            let stage = 1;
            blue.onclick = () => {
                if (stage === 1) {
                    window.sound.playCorrect();
                    stage = 2;
                    prompt.innerHTML = "<span style='color:#ff5252;'>Now click the RED button right now!</span>";
                    setTimeout(() => {
                        if (stage === 2) {
                            game.solveLevel("Clever! Simon DID NOT say click Red!");
                        }
                    }, 3200);
                }
            };
            red.onclick = () => {
                if (stage === 2) {
                    game.loseLife("HA! SIMON DIDN'T SAY CLICK RED! Caught you!");
                } else {
                    game.loseLife("Simon said BLUE, not Red!");
                }
            };
        }
    },

    // LEVEL 22: Bizarre Obscure Biology Trivia
    {
        id: 22,
        title: "Question 22",
        question: "Which Australian animal is the ONLY known creature in the universe to produce distinctly cubic feces?",
        type: "choice",
        hint: "6-sided natural geometry...",
        options: [
            { text: "Common Wombat", correct: true, msg: "100% biological fact! Wombats poop in cubes to stop them rolling off rocks!" },
            { text: "Duck-billed Platypus", correct: false, msg: "Weird animal, but round poop." },
            { text: "Tasmanian Devil", correct: false, msg: "Nope!" },
            { text: "Echidna", correct: false, msg: "Nope!" }
        ]
    },

    // LEVEL 23: Bomb Wire Defusal
    {
        id: 23,
        title: "Question 23",
        question: "DEFUSE THE BOMB! Cut the correct wire!",
        type: "interactive",
        timer: 6,
        hint: "Blue wire has the ground bypass loop...",
        html: `
            <div class="interactive-stage text-center">
                <div style="position: relative; width: 230px; height: 140px; background: #1a1a1a; border: 3px solid #666; border-radius: 10px; margin: 10px auto; display: flex; justify-content: space-around; align-items: center;">
                    <div id="w-red" style="width: 14px; height: 110px; background: #f44336; border-radius: 7px; cursor: pointer; border: 2px solid #fff;" title="Red Wire"></div>
                    <div id="w-blue" style="width: 14px; height: 110px; background: #2196f3; border-radius: 7px; cursor: pointer; border: 2px solid #fff;" title="Blue Wire"></div>
                    <div id="w-yellow" style="width: 14px; height: 110px; background: #ffeb3b; border-radius: 7px; cursor: pointer; border: 2px solid #fff;" title="Yellow Wire"></div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            container.querySelector('#w-red').onclick = () => game.loseLife("BOOM! Red wire was armed!");
            container.querySelector('#w-yellow').onclick = () => game.loseLife("BOOM! Yellow wire detonated!");
            container.querySelector('#w-blue').onclick = () => {
                container.querySelector('#w-blue').style.height = "20px";
                window.sound.playCorrect();
                game.solveLevel("SNIP! Defusal successful! Crisis averted!");
            };
        }
    },

    // LEVEL 24: Classic Wordplay Trick
    {
        id: 24,
        title: "Question 24",
        question: "How many letters are in 'The Alphabet'?",
        type: "choice",
        hint: "Count the characters in the quotation marks...",
        options: [
            { text: "26", correct: false, msg: "There are 26 letters in an alphabet, but count 'The Alphabet'!" },
            { text: "11", correct: true, msg: "T-h-e A-l-p-h-a-b-e-t = Exactly 11 letters!" },
            { text: "24", correct: false, msg: "Nope!" },
            { text: "Infinite", correct: false, msg: "Too abstract!" }
        ]
    },

    // LEVEL 25: Bizarre Obscure Physics Trivia
    {
        id: 25,
        title: "Question 25",
        question: "What is the terminal velocity of a falling raindrop at sea level?",
        type: "choice",
        hint: "Rain doesn't hit as fast as a bullet...",
        options: [
            { text: "~9 m/s (approx 20 mph / 32 km/h)", correct: true, msg: "Aerodynamic drag caps large raindrops at ~9 m/s!" },
            { text: "~45 m/s (approx 100 mph)", correct: false, msg: "That would puncture roofs!" },
            { text: "~1 m/s (walking pace)", correct: false, msg: "Too slow, that is fog mist." },
            { text: "Speed of Sound (Mach 1)", correct: false, msg: "Sonic raindrops? Yikes!" }
        ]
    },

    // LEVEL 26: The Escaping NEXT Button
    {
        id: 26,
        title: "Question 26",
        question: "Click the 'NEXT' button to proceed to the next stage.",
        type: "interactive",
        hint: "Corner the elusive button!",
        html: `
            <div id="btn-arena" style="position: relative; width: 100%; height: 180px; background: rgba(0,0,0,0.2); border-radius: 12px; overflow: hidden;">
                <button id="flee-btn" class="quiz-btn" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); transition: all 0.1s ease; background: #76ff03; color: #000; font-weight: 900;">NEXT ➔</button>
            </div>
        `,
        setup: (container, game) => {
            const btn = container.querySelector('#flee-btn');
            const arena = container.querySelector('#btn-arena');
            let dodges = 0;
            const flee = () => {
                if (dodges >= 4) {
                    btn.innerText = "OKAY YOU WIN ➔";
                    btn.style.background = "#ff4081";
                    btn.style.color = "#fff";
                    return;
                }
                dodges++;
                window.sound.playBoing();
                const maxX = arena.clientWidth - 120;
                const maxY = arena.clientHeight - 50;
                const x = Math.max(10, Math.floor(Math.random() * maxX));
                const y = Math.max(10, Math.floor(Math.random() * maxY));
                btn.style.left = x + 'px';
                btn.style.top = y + 'px';
                btn.style.transform = 'none';
            };
            btn.onmouseenter = flee;
            btn.onclick = () => game.solveLevel("Gotcha! Elite agility!");
        }
    },

    // LEVEL 27: Bizarre Insane Legal Trivia
    {
        id: 27,
        title: "Question 27",
        question: "In the state of Alaska, it is strictly illegal to wake which animal from slumber for the express purpose of taking a selfie?",
        type: "choice",
        hint: "Apex predator safety law...",
        options: [
            { text: "A Sleeping Grizzly / Polar Bear", correct: true, msg: "True law! Waking sleeping bears for photos is explicitly illegal in Alaska!" },
            { text: "A Sleeping Moose Calf", correct: false, msg: "Dangerous, but not that specific statute!" },
            { text: "A Sea Otter", correct: false, msg: "Nope!" },
            { text: "A Bald Eagle", correct: false, msg: "Federal bird protection covers eagles, not this statute." }
        ]
    },

    // LEVEL 28: Emoji Math / PEMDAS Trap
    {
        id: 28,
        title: "Question 28",
        question: "Solve the birthday equation:<br><span style='font-size: 22px; color:#ffd700;'>🎂 + 🎂 = 20<br>🎂 × 🎈 = 50<br>🎈 + 🎁 × 🎂 = ?</span><br><small style='font-size:13px; opacity:0.8;'>(Note: 🎁 = 2)</small>",
        type: "choice",
        hint: "🎂=10, 🎈=5, 🎁=2. Remember PEMDAS (Multiplication first!)",
        options: [
            { text: "70", correct: false, msg: "Check order of operations! Multiply first!" },
            { text: "25", correct: true, msg: "Math Whiz! 5 + (2 × 10) = 5 + 20 = 25!" },
            { text: "150", correct: false, msg: "Way off!" },
            { text: "30", correct: false, msg: "Close, but check 5 + 20!" }
        ]
    },

    // LEVEL 29: The Gatekeeper
    {
        id: 29,
        title: "Question 29",
        question: "Are you 100% ready to unlock T's Birthday Grand Finale Vault?",
        type: "interactive",
        hint: "Click the YES button!",
        html: `
            <div class="interactive-stage text-center">
                <div style="display: flex; justify-content: center; gap: 20px; margin: 30px 0;">
                    <button id="gate-yes" class="quiz-btn pulse-anim" style="background:#00e5ff; color:#000; font-size: 20px; font-weight: 900;">YES! 🎁</button>
                    <button id="gate-no" class="quiz-btn" style="background:#ff5252; color:#fff; font-size: 20px;">NO ❌</button>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const yes = container.querySelector('#gate-yes');
            const no = container.querySelector('#gate-no');
            no.onclick = () => game.loseLife("Have some confidence!");
            yes.onclick = () => {
                window.sound.playFanfare();
                game.solveLevel("ENTERING LEVEL 30: THE GRAND VAULT!");
            };
        }
    },

    // LEVEL 30: THE FINAL BOSS - The Grand Vault
    {
        id: 30,
        title: "Level 30: THE GRAND FINALE",
        question: "👑 CRACK THE GRAND BIRTHDAY VAULT COMBINATION! 👑",
        type: "interactive",
        timer: 45,
        hint: "Align dials to [ 7 | T | 21 ] then press UNLOCK!",
        html: `
            <div class="interactive-stage text-center" style="max-width: 500px; margin: 0 auto;">
                <div class="vault-chassis" style="background: radial-gradient(circle, #37474f 0%, #212121 100%); border: 6px solid #ffd700; border-radius: 16px; padding: 20px; box-shadow: 0 0 30px rgba(255,215,0,0.4);">
                    <div style="font-size: 45px; margin-bottom: 10px;">🔒</div>
                    <div style="color: #ffd700; font-weight: 900; letter-spacing: 2px; margin-bottom: 15px;">
                        TITANIUM VAULT COMBINATION
                    </div>
                    
                    <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 20px;">
                        <div class="vault-dial-box">
                            <button id="dial-1-up" class="dial-btn">▲</button>
                            <div id="dial-1-val" class="dial-val">1</div>
                            <button id="dial-1-dn" class="dial-btn">▼</button>
                        </div>
                        <div class="vault-dial-box">
                            <button id="dial-2-up" class="dial-btn">▲</button>
                            <div id="dial-2-val" class="dial-val">A</div>
                            <button id="dial-2-dn" class="dial-btn">▼</button>
                        </div>
                        <div class="vault-dial-box">
                            <button id="dial-3-up" class="dial-btn">▲</button>
                            <div id="dial-3-val" class="dial-val">10</div>
                            <button id="dial-3-dn" class="dial-btn">▼</button>
                        </div>
                    </div>

                    <button id="btn-vault-unlock" class="quiz-btn" style="background: #ffd700; color: #000; font-size: 18px; font-weight: 900; width: 80%; box-shadow: 0 0 15px #ffd700;">
                        🔓 UNLOCK VAULT
                    </button>
                    <div style="font-size: 12px; color: #90caf9; margin-top: 10px;">Combination Clue: Lucky #7, Birthday Star 'T', Forever Age 21</div>
                </div>
            </div>
        `,
        setup: (container, game) => {
            const dial1Val = container.querySelector('#dial-1-val');
            const dial2Val = container.querySelector('#dial-2-val');
            const dial3Val = container.querySelector('#dial-3-val');
            const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            let d1 = 1;
            let d2Idx = 0;
            let d3 = 10;

            container.querySelector('#dial-1-up').onclick = () => { d1 = (d1 % 9) + 1; dial1Val.innerText = d1; window.sound.playClick(); };
            container.querySelector('#dial-1-dn').onclick = () => { d1 = d1 > 1 ? d1 - 1 : 9; dial1Val.innerText = d1; window.sound.playClick(); };

            container.querySelector('#dial-2-up').onclick = () => { d2Idx = (d2Idx + 1) % letters.length; dial2Val.innerText = letters[d2Idx]; window.sound.playClick(); };
            container.querySelector('#dial-2-dn').onclick = () => { d2Idx = (d2Idx - 1 + letters.length) % letters.length; dial2Val.innerText = letters[d2Idx]; window.sound.playClick(); };

            container.querySelector('#dial-3-up').onclick = () => { d3 = (d3 % 30) + 1; dial3Val.innerText = d3; window.sound.playClick(); };
            container.querySelector('#dial-3-dn').onclick = () => { d3 = d3 > 1 ? d3 - 1 : 30; dial3Val.innerText = d3; window.sound.playClick(); };

            container.querySelector('#btn-vault-unlock').onclick = () => {
                if (d1 === 7 && letters[d2Idx] === 'T' && d3 === 21) {
                    window.sound.playVaultOpen();
                    setTimeout(() => {
                        game.triggerGrandVictory();
                    }, 500);
                } else {
                    window.sound.playWrong();
                    game.loseLife(`Incorrect combination: [ ${d1} | ${letters[d2Idx]} | ${d3} ]! Hint: 7 - T - 21`);
                }
            };
        }
    }
);

