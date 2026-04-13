import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1, text: "在选择终身伴侣时，对方的经济基础、认知水平与我是否匹配，比单纯的“心动感”更重要。",
    options: [ { text: "非常同意", score: { P: 10, R: 0 } }, { text: "比较同意", score: { P: 7, R: 3 } }, { text: "比较不同意", score: { P: 3, R: 7 } }, { text: "非常不同意", score: { P: 0, R: 10 } } ]
  },
  {
    id: 2, text: "如果一段婚姻物质条件极其优越，但双方缺乏深度的精神交流和浪漫互动，我会觉得这段婚姻是失败的。",
    options: [ { text: "非常同意", score: { P: 0, R: 10 } }, { text: "比较同意", score: { P: 3, R: 7 } }, { text: "比较不同意", score: { P: 7, R: 3 } }, { text: "非常不同意", score: { P: 10, R: 0 } } ]
  },
  {
    id: 3, text: "婚前进行清晰的财产界定或签署婚前协议，是理智且必要的成年人行为，并不代表不相爱。",
    options: [ { text: "非常同意", score: { P: 10, R: 0 } }, { text: "比较同意", score: { P: 7, R: 3 } }, { text: "比较不同意", score: { P: 3, R: 7 } }, { text: "非常不同意", score: { P: 0, R: 10 } } ]
  },
  {
    id: 4, text: "我相信真正的爱情可以克服阶层差异和物质贫乏带来的绝大多数困难。",
    options: [ { text: "非常同意", score: { P: 0, R: 10 } }, { text: "比较同意", score: { P: 3, R: 7 } }, { text: "比较不同意", score: { P: 7, R: 3 } }, { text: "非常不同意", score: { P: 10, R: 0 } } ]
  },
  {
    id: 5, text: "比起伴侣在纪念日精心准备的浪漫惊喜，我更看重他/她能否在财务危机时提供实质性的解决方案。",
    options: [ { text: "非常同意", score: { P: 10, R: 0 } }, { text: "比较同意", score: { P: 7, R: 3 } }, { text: "比较不同意", score: { P: 3, R: 7 } }, { text: "非常不同意", score: { P: 0, R: 10 } } ]
  },
  {
    id: 6, text: "如果伴侣在事业上遭遇重大挫折且长达数年无法翻身，即使我们感情很好，我也会重新评估这段关系的存续。",
    options: [ { text: "非常同意", score: { P: 10, R: 0 } }, { text: "比较同意", score: { P: 7, R: 3 } }, { text: "比较不同意", score: { P: 3, R: 7 } }, { text: "非常不同意", score: { P: 0, R: 10 } } ]
  },
  {
    id: 7, text: "即使在最亲密的关系中，我也必须保留一块完全属于自己、伴侣无法涉足的心理和物理空间。",
    options: [ { text: "非常同意", score: { F: 0, I: 10 } }, { text: "比较同意", score: { F: 3, I: 7 } }, { text: "比较不同意", score: { F: 7, I: 3 } }, { text: "非常不同意", score: { F: 10, I: 0 } } ]
  },
  {
    id: 8, text: "当伴侣情绪低落时，如果他/她拒绝我的关心并要求独处，我会感到强烈的焦虑或被抛弃感。",
    options: [ { text: "非常同意", score: { F: 10, I: 0 } }, { text: "比较同意", score: { F: 7, I: 3 } }, { text: "比较不同意", score: { F: 3, I: 7 } }, { text: "非常不同意", score: { F: 0, I: 10 } } ]
  },
  {
    id: 9, text: "我认为健康的夫妻应该拥有各自独立的社交圈和爱好，不需要所有活动都捆绑在一起。",
    options: [ { text: "非常同意", score: { F: 0, I: 10 } }, { text: "比较同意", score: { F: 3, I: 7 } }, { text: "比较不同意", score: { F: 7, I: 3 } }, { text: "非常不同意", score: { F: 10, I: 0 } } ]
  },
  {
    id: 10, text: "夫妻之间应该做到绝对坦诚，交换手机密码或随时查看对方的通讯设备是亲密无间的表现。",
    options: [ { text: "非常同意", score: { F: 10, I: 0 } }, { text: "比较同意", score: { F: 7, I: 3 } }, { text: "比较不同意", score: { F: 3, I: 7 } }, { text: "非常不同意", score: { F: 0, I: 10 } } ]
  },
  {
    id: 11, text: "我完全可以接受伴侣独自一人或和同性朋友去外地旅行几天，而不需要我的陪同。",
    options: [ { text: "非常同意", score: { F: 0, I: 10 } }, { text: "比较同意", score: { F: 3, I: 7 } }, { text: "比较不同意", score: { F: 7, I: 3 } }, { text: "非常不同意", score: { F: 10, I: 0 } } ]
  },
  {
    id: 12, text: "如果条件允许，我倾向于在家里和伴侣分房睡或分被窝，以保证个人的高质量睡眠，这并不影响感情。",
    options: [ { text: "非常同意", score: { F: 0, I: 10 } }, { text: "比较同意", score: { F: 3, I: 7 } }, { text: "比较不同意", score: { F: 7, I: 3 } }, { text: "非常不同意", score: { F: 10, I: 0 } } ]
  },
  {
    id: 13, text: "在家庭重大决策（如买房、投资、子女教育方向）上，我通常希望最终由我来拍板。",
    options: [ { text: "非常同意", score: { D: 10, A: 0 } }, { text: "比较同意", score: { D: 7, A: 3 } }, { text: "比较不同意", score: { D: 3, A: 7 } }, { text: "非常不同意", score: { D: 0, A: 10 } } ]
  },
  {
    id: 14, text: "我更倾向于伴侣是一个果断、有主见的人，能够在关键时刻为我指明方向并承担决策压力。",
    options: [ { text: "非常同意", score: { D: 0, A: 10 } }, { text: "比较同意", score: { D: 3, A: 7 } }, { text: "比较不同意", score: { D: 7, A: 3 } }, { text: "非常不同意", score: { D: 10, A: 0 } } ]
  },
  {
    id: 15, text: "当我和伴侣在生活习惯上发生冲突时，我往往是主动妥协、改变自己以适应对方的那个人。",
    options: [ { text: "非常同意", score: { D: 0, A: 10 } }, { text: "比较同意", score: { D: 3, A: 7 } }, { text: "比较不同意", score: { D: 7, A: 3 } }, { text: "非常不同意", score: { D: 10, A: 0 } } ]
  },
  {
    id: 16, text: "如果伴侣身上有我不认可的缺点，我会想方设法去“改造”或引导他/她，而不是被动忍受。",
    options: [ { text: "非常同意", score: { D: 10, A: 0 } }, { text: "比较同意", score: { D: 7, A: 3 } }, { text: "比较不同意", score: { D: 3, A: 7 } }, { text: "非常不同意", score: { D: 0, A: 10 } } ]
  },
  {
    id: 17, text: "为了避免激烈的争吵和冷战，我常常会在自己认为并非原则性的小事上委屈自己，选择让步。",
    options: [ { text: "非常同意", score: { D: 0, A: 10 } }, { text: "比较同意", score: { D: 3, A: 7 } }, { text: "比较不同意", score: { D: 7, A: 3 } }, { text: "非常不同意", score: { D: 10, A: 0 } } ]
  },
  {
    id: 18, text: "我会被性格温顺、配合度高、愿意把我的需求置于他们之上的人强烈吸引。",
    options: [ { text: "非常同意", score: { D: 10, A: 0 } }, { text: "比较同意", score: { D: 7, A: 3 } }, { text: "比较不同意", score: { D: 3, A: 7 } }, { text: "非常不同意", score: { D: 0, A: 10 } } ]
  },
  {
    id: 19, text: "我理想中的家庭生活是建立一套稳定、可预测的规律，抵御外界的不确定性，而非不断追求刺激。",
    options: [ { text: "非常同意", score: { S: 10, X: 0 } }, { text: "比较同意", score: { S: 7, X: 3 } }, { text: "比较不同意", score: { S: 3, X: 7 } }, { text: "非常不同意", score: { S: 0, X: 10 } } ]
  },
  {
    id: 20, text: "如果伴侣提出想辞去现在收入尚可的工作，去外地尝试一个前景不明但很有潜力的项目，在风险可控下我倾向于支持。",
    options: [ { text: "非常同意", score: { S: 0, X: 10 } }, { text: "比较同意", score: { S: 3, X: 7 } }, { text: "比较不同意", score: { S: 7, X: 3 } }, { text: "非常不同意", score: { S: 10, X: 0 } } ]
  },
  {
    id: 21, text: "在财务规划上，我极度厌恶高杠杆和高风险投资，拥有充足的保本储蓄是我安全感的核心来源。",
    options: [ { text: "非常同意", score: { S: 10, X: 0 } }, { text: "比较同意", score: { S: 7, X: 3 } }, { text: "比较不同意", score: { S: 3, X: 7 } }, { text: "非常不同意", score: { S: 0, X: 10 } } ]
  },
  {
    id: 22, text: "如果关系进入了长期的“一潭死水”状态，哪怕生活无忧，我也会感到深深的窒息，并渴望去打破现状。",
    options: [ { text: "非常同意", score: { S: 0, X: 10 } }, { text: "比较同意", score: { S: 3, X: 7 } }, { text: "比较不同意", score: { S: 7, X: 3 } }, { text: "非常不同意", score: { S: 10, X: 0 } } ]
  },
  {
    id: 23, text: "当面临重大人生选择时，我通常会优先考虑“如何不失去现有的”，而不是“如何获得更多未知的”。",
    options: [ { text: "非常同意", score: { S: 10, X: 0 } }, { text: "比较同意", score: { S: 7, X: 3 } }, { text: "比较不同意", score: { S: 3, X: 7 } }, { text: "非常不同意", score: { S: 0, X: 10 } } ]
  },
  {
    id: 24, text: "我认为夫妻双方必须保持个人的“终身进化”，如果伴侣停止成长，即使他/她是个好人，我也会觉得渐行渐远。",
    options: [ { text: "非常同意", score: { S: 0, X: 10 } }, { text: "比较同意", score: { S: 3, X: 7 } }, { text: "比较不同意", score: { S: 7, X: 3 } }, { text: "非常不同意", score: { S: 10, X: 0 } } ]
  },
  {
    id: 25, text: "在亲密关系中，无论多爱对方，我个人的事业发展和自我实现永远是第一优先级的。",
    options: [ { text: "非常同意", score: { E: 10, G: 0 } }, { text: "比较同意", score: { E: 7, G: 3 } }, { text: "比较不同意", score: { E: 3, G: 7 } }, { text: "非常不同意", score: { E: 0, G: 10 } } ]
  },
  {
    id: 26, text: "当伴侣的原生家庭遭遇重大危机需要大量资金时，我愿意大幅降低自己的生活质量，甚至拿出全部积蓄帮忙。",
    options: [ { text: "非常同意", score: { E: 0, G: 10 } }, { text: "比较同意", score: { E: 3, G: 7 } }, { text: "比较不同意", score: { E: 7, G: 3 } }, { text: "非常不同意", score: { E: 10, G: 0 } } ]
  },
  {
    id: 27, text: "如果在感情中我长期感到“付出与回报不成正比”，我会非常果断地选择止损退出。",
    options: [ { text: "非常同意", score: { E: 10, G: 0 } }, { text: "比较同意", score: { E: 7, G: 3 } }, { text: "比较不同意", score: { E: 3, G: 7 } }, { text: "非常不同意", score: { E: 0, G: 10 } } ]
  },
  {
    id: 28, text: "对我而言，看到伴侣因为我的牺牲和照顾而获得世俗意义上的成功，比我自己取得成功更让我有成就感。",
    options: [ { text: "非常同意", score: { E: 0, G: 10 } }, { text: "比较同意", score: { E: 3, G: 7 } }, { text: "比较不同意", score: { E: 7, G: 3 } }, { text: "非常不同意", score: { E: 10, G: 0 } } ]
  },
  {
    id: 29, text: "在分配家庭的时间和金钱资源时，我会首先确保自己的核心需求（如个人爱好、进修）得到满足，然后再考虑伴侣的。",
    options: [ { text: "非常同意", score: { E: 10, G: 0 } }, { text: "比较同意", score: { E: 7, G: 3 } }, { text: "比较不同意", score: { E: 3, G: 7 } }, { text: "非常不同意", score: { E: 0, G: 10 } } ]
  },
  {
    id: 30, text: "哪怕知道对方可能无法同等回报我，只要在我的能力范围内，我总是忍不住想为伴侣做得更多。",
    options: [ { text: "非常同意", score: { E: 0, G: 10 } }, { text: "比较同意", score: { E: 3, G: 7 } }, { text: "比较不同意", score: { E: 7, G: 3 } }, { text: "非常不同意", score: { E: 10, G: 0 } } ]
  }
];
