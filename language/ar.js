let config = require(`../config.js`);
let prefix = config.prefix;

module.exports = {
 start: {
    perms: `ليس لديك رتبه بها صلاحيه او رتبه محددها الأونر للقيف اواي  MANAGE_GUILD`,
    duration: `يجب عليك ادخال الوقت مثل: 1d`,
    argswinners: `يجب عليك ادخال عدد الفائزين`,
    prize: `يجب عليك ادخال الجائزة`
  },
  create: {
      perms: `ليس لديك رتبه بها صلاحيه او رتبه محددها الأونر للقيف اواي MANAGE_GUILD`,
    channel: ` يجب ان تفوم بفعل منشن \`لروم صالح\` لتثبيت القيف اوي فيه\n> مثال: ${prefix}create \`#giveawaychannel (giveawaychannel: هذة الغرفة)\``,
    otherServer: `.!لا يمكنك انشاء \`قيف اوي\` في خادم اخر غير هذا`,
    duration: `عليك ادخال \`وقت صالح\`\n مثل: 1d`,
    argswinners: ` عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}create #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
    prize: ` ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}create #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
    good: ` ** تم انشاء \`القيف اوي\` في الغرفة التالية ↘↘:**`,

    giveaway: ` القيف اوي بدء `,
    giveawayEnded: ` القيف اوي انتهى `,

    timeRemaining: `الوقت المتبقي $: **{duration}**`,
    inviteToParticipate: (message) => `.اضغط على🎉 للدخول الى القيف اوي`,
    winMessage: (message) => `🎉 {winners} ،مبروك ! **{prize}** : لقد فزت`,
    embedFooter: `** قيف اواي **`,
    noWinner: `.تم الغاء القيف اوي لا يوجد عدد مشاركين كافي`,
    hostedBy: `{user}**:  صانع القيف اوي`,
    winners: `: الفائز/ون`,
    endedAt: `انتهت في ↪`,
  },

  units: {
    seconds: `ثانية`,
    minutes: `دقيقة`,
    hours: `ساعة`,
    days: `يوم`,
  },

  end: {
    perms: ` ليس لديك رتبة ذات صلاحية \n\`MANAGE_GUILD\`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: ` الرجاء ادخال ايدي القيف اوي الصحيح!`,
    err: `تعذر التعرف على القيف اوي هذه:`,
    errmod: `هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`,
    good: ` هذه ابقيف اوي سوف تنتهي خلال:`
  },

  reroll: {
    perms: ` ليس لديك رتبة ذات صلاحية \n\`MANAGE_GUILD \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `الرجاء ادخال ايدي القيف اوي الصحيح!`,
    err: `تعذر التعرف على القيف اوي هذه:`,
    good: `:tada: فائز/ين جدد : {winners} ! مبروك !.`,
    parts: ` لم يكن هناك عدد مشاركين كافي في القيف اوي لا يمكنني الاختيار !.`
  },

  delete: {
    done: `تم سوف يتم مسح القيف اوي حالاً`,
    otherServer: `لا يمكنك التحكم في سحب شخص آخر على هذا الخادم!`,
    otherUser: `لا يمكنك التحكم في هذا السحب لأنك لست مالكه!`
  },
  edit: {
    perms: `ليس لديك رتبة ذات صلاحية \n\`MANAGE_GUILD \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: `الرجاء ادخال ايدي القيف اوي الصحيح!`,
    time: `الرجاء ادخال وقت صحيح \n> مثال: \`1m, 1h, 1d\``,
    errtime: `يجب ان تكون مدة القيف اوي اقل من 10 ايام`,
    argswinners: `عليك ادخال عدد \`فائزين صالح\`\n> مثال: ${prefix}create #giveawaychannel 1m \`4 (4: عدد الفائزين)\` Nitro`,
    errwinners: ` يجب ان يكون عدد الفائزون بالقيف اوي اقل من 15 فائزاً`,
    prize: ` ادخل ماهي \`الجائزة\` رجاء\n> مثال: ${prefix}create #giveawaychannel 1h 4 \`Nitro(Nitro: الجائزة)\``,
    err: `تعذر التعرف على القيف اوي هذه:`,
    good: ` تم سيتم تعديل التغيرات حالاً`,
    errmod: `هذه القيف اوي لقد انتهت او تم حذفها سابقا!.`
  },

  lang: {
    perms: ` ليس لديك رتبة ذات صلاحية \n\`MANAGE_GUILD\`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: ` الرجاء ادخال لغة صالحة مثال: (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: ` اللغة التي اذخلتها هي بالفعل لغة السيرفر. حاول تغيير اللغة لترى!.`
  },

  set: {
    perms: `ليس لديك رتبة ذات صلاحية \n\`MANAGE_GUILD \`،\n  يمكنك إنشاء رتبة للتحكم في اوامر القيف اوي واسمها\n:`,
    msg: ` يرجى الإشارة إلى وظيفة يتم تحديدها\n \`mention\` !.لعمل منشن للجميع لجميع الاعضاء عند كل قيف اوي جديد\n \`logs\` .!لتحديد قناة بها سجلات القيف اوي\n \`role\` لتعيين رتبة يمكنها استخدام جميع اوامر القيف اوي`,
    args: ` يرجى التحديد \`on\` للتفعيل، \`off\` لالغاء التفعيل!.`,
    erroff: ` هذة الوظيفة بالفعل معطلة. حاول تشغيلها لترى`,
    erron: ` هذة الوظيفة بالفعل مفعلة. حاول ان تلغي تفعيلها لترى`,
    mon: `لقد قمت بتفعيل \`المنشن\` للقيف اوي القادم`,
    moff: ` تم الغاء تفعيل \`المنشن\` للقيف اوي القادم`,
    channel: ` يرجى توجيهي الى قناة سجلات القيف اوي \n مثال: ${prefix}set logs \`#logs(#logs: غرفة سجلات القيف اوي)\``,
    chon: ` تم تحديد غرفة سجلات القيف اوي التي هي :`,
    role: `الرجاء اختيار رتبة صالحة\n مثال: ${prefix}set role \`@Giveaways Management\` لاختيار الرتبة.`,
    ron: ` قمت بتحديد الدور البديل ب: `,
  },

  logs: {
    raddtitle: `عضو جديد`,
    raddmsg1: `هذا العضو`,
    raddmsg2: `لقد دخل هذه القيف اوي`,
    rremtitle: `مشارك سابق`,
    rremmsg1: `هذا العضو`,
    rremmsg2: `الغى دخوله في القيف اوي`,
  },

  invite: {
    main: `الروابط الاساسية`,
    disc: `للحصول على رابط قابل للنسخ اكتب الامر التالي \n \`${prefix}invite copy\``,
    web: `رابط موقع Giveaway's BoT`,
    inv: ` رابط اضافة Giveaway's BoT`,
    vote: ` التصويت ل Giveaway's BoT`,
    sup: ` سيرفر الدعم الفني`
  },

  help: {
    title: `Help Documents Overview:`,
    disc: '● هنا يمكنك ان تجد جميع `Giveaway Commands`',
    giveawaycmd: ` أوامر القيف آوي - (٦)`,
    featuredcmd: `أوامر المميزه - (٦)`,
    infocmd: `أوامر المعلومات - (٤)`,
    ownerbot: ` أوامر صاحب البوت - (٢)`,
    link: `__:الروابط__`
  },

  stats: {
    title: `Giveaway's Information:`,
    info: 'انه بوت مفتوح المصدر، يسمح لك بانشاء القيف اوي بسهولة تامة ويوفر لك العديد من المميزات.',
    stats: `__ :الاحصائيات__`,
    stat: `\`:إجمالي السيرفرات\``,
    set: `\`:إجمالي المستخدمين\``,
    ch: `\`:إجمالي الرومات\``,
    ver: `__ :الإصدارات__`,
    ram: `__ الرامات__`,
    on: ` • __نشّط__`,
    for: `**نشّط لمدة** `,
    moreinfo: `__ :المزيد من المعلومات__`,
    comd: `\`:مجموع الأوامر\` `,
    giv: `\`:جميع القيف اويات\` `,
  },
  prefixerror: ` اكتب بادئه صالحه!.`,
  setprefix: ` البادئه الان في هذا السيرفر اصبحت  `,

  info: {
    ping: ` سرعة استجابة البوت  `,
  },
  blacklist: {
    blacklist: `لا يمكنك استخدام لانك ممنوع بسبب مخالفتك قوانين البوت`
  },
}
