const i18n = {
	t: (text) => {
    return text;
  }
}
const t = i18n.t;

const hello1 = "こんにちは";
const hello2 = t("こんにちは");
const hello3 = i18n.t("こんにちは");