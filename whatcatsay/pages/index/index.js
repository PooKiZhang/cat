Page({
  data: {
    // 改为分类结构
    categories: [
      {
        title: "= 友好 =",      // 分类标题
        type: "friendly",  // 分类标识（可选）
        buttons: [          // 该分类下的按钮
          {
            name: "Gentle Call",
            title: "温和的召唤",
            desc: "翻译：快来呀宝贝/妈妈在这/爱你哟",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/friendly/wenhedezhaohuan.mp3"
          },
          { 
            name: "delicious",
            title: "真好吃",
            desc: "翻译：太好吃啦/真香啊",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/friendly/zhenhaochi.mp3"
          },
          { 
            name: "comfortable",
            title: "舒服",
            desc: "翻译；太舒服了/好享受啊",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/friendly/shufu.mp3"
          },
          { 
            name: "coquettish",
            title: "撒娇",
            desc: "翻译：我可爱嘛！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/friendly/sajiao.mp3"
          },
          { 
            name: "satisfy",
            title: "满足",
            desc: "翻译：好愜意啊",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/friendly/manzu.mp3"
          },
        ]
      },
      {
        title: "= 吸引 =",
        type: "attract",
        buttons: [
          {
            name: "i am friendly",
            title: "表示友好",
            desc: "翻译：你好~",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/Attract_Friendly.mp3"
          },
          {
            name: "sayhello",
            title: "打招呼",
            desc: "翻译：你好呀/我在这呢/我来啦",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/sayhello.mp3"
          },
          {
            name: "Coquettish/Let's play~",
            title: "来玩么",
            desc: "翻译：撒娇/来玩嘛~",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/Attract_Come_play.mp3"
          },
          {
            name: "playwithme",
            title: "来跟我玩吧",
            desc: "翻译：跟我玩会/求互动",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/playwithme.mp3"
          },
          {
            name: "Excited to play with me",
            title: "跟我玩吧！跟我玩吧！",
            desc: "翻译：快跟我玩！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/jidongzhaowowan.mp3"
          },
          {
            name: "happy Come and play!",
            title: "来玩呀~",
            desc: "翻译：来玩呀，嘿嘿嘿",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/waner.mp3"
          },
          {
            name: "Urgent call",
            title: "急迫、召唤孩子",
            desc: "翻译：快来孩子！快来！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/jipodezhaohuan.mp3"
          },
          {
            name: "Looking for mom",
            title: "急迫、找妈妈",
            desc: "翻译：救救我/这是哪好怕怕/我要妈妈",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/zhaomama.mp3"
          },
          {
            name: "hungryforfood",
            title: "饿了要食物",
            desc: "翻译：有吃的吗/吃了吗",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/hungryforfood.mp3"
          },
          {
            name: "rut",
            title: "发情",
            desc: "翻译：我要找对象/苍天啊给我来个对象吧",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/rut.mp3"
          },
          {
            name: "Attraction: courtship",
            title: "求偶",
            desc: "翻译：处对象么，嘿嘿嘿",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/qiuou.mp3"
          },
          {
            name: "perfunctoryresponse",
            title: "敷衍回应",
            desc: "翻译：我睡觉呢你干嘛！/好的知道了",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/perfunctoryresponse.mp3"
          },
          
          {
            name: "Anxiety and fear",
            title: "焦虑、害怕",
            desc: "翻译：我好孤独啊/好烦躁好慌张",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/jiaolvhaipa.mp3"
          },
          {
            name: "aggrieved, uncomfortable",
            title: "委屈、不舒服",
            desc: "翻译：宝宝受委屈了，呜呜呜",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/uncomfortable.mp3"
          },
          {
            name: "excited",
            title: "兴奋、捕猎",
            desc: "翻译：专注！准备！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/attract/excitement_hunting.mp3"
          },
        ]
      },
      {
        title: "= 警告 =",
        type: "warning",
        buttons: [
          {
            name: "Hostility, vigilance",
            title: "敌视、警惕",
            desc: "翻译：非常警惕",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/dishi.mp3"
          },
          {
            name: "Goaway!",
            title: "走开！",
            desc: "翻译：第一次警告！走开！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/zoukai.mp3"
          },
          {
            name: "Go away!!",
            title: "快走开！！！",
            desc: "翻译：第二次警告！给我滚！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/zoukaia.mp3"
          },
          {
            name: "expulsion",
            title: "驱逐",
            desc: "翻译：这是老子的地盘",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/quzhu.mp3"
          },
          {
            name: "Die away!",
            title: "死开！",
            desc: "翻译：第三次警告，给爷爬！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/sikai.mp3"
          },
          {
            name: "Strong warning",
            title: "警告、准备战斗",
            desc: "翻译：最后警告，你不走我要打你了哦",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/zhandong.mp3"
          },
          {
            name: "Stop playing with me!",
            title: "生气、放开我！",
            desc: "翻译：不要玩我啦！放开我！",
            url: "https://cdn.jsdelivr.net/gh/PooKiZhang/cat/audios/warning/JGbuyaonongwo.mp3"
          },
        ]
      }
    ],
    currentSound: null,
    audio: null
  },

  toggleSound(e) {
    const name = e.currentTarget.dataset.name;
    const url = e.currentTarget.dataset.url;
    if (this.data.currentSound === name) {
      this.data.audio.stop(); // 停止播放
      this._clearAudio();     // 清理状态
      return;
    }

    // 停止之前的音频并清理
    if (this.data.audio) {
      this.data.audio.stop();
      this._clearAudio();
    }

    // 创建新音频实例
    const audio = wx.createInnerAudioContext();
    audio.src = url;
    
    // 监听音频播放结束事件（新增代码）
    audio.onEnded(() => {
      this._clearAudio(); // 播放结束后自动清理状态
    });

    // 监听音频播放错误（可选但建议）
    audio.onError((err) => {
      console.error('音频播放失败', err);
      this._clearAudio();
    });

    audio.play();
    this.setData({ 
      currentSound: name,
      audio: audio 
    });
  },

  // 新增方法：清理音频状态
  _clearAudio() {
    if (this.data.audio) {
      this.data.audio.destroy(); // 销毁音频实例
      this.setData({ 
        currentSound: null,
        audio: null 
      });
    }
  }
});