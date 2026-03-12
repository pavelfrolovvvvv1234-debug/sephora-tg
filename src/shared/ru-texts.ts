/**
 * Жёстко заданные русские тексты для приветствия и профиля.
 * Не используют Fluent/сессию — язык не может переключиться на EN.
 *
 * @module shared/ru-texts
 */

/** Русское приветствие (всегда). */
export function getWelcomeTextRu(balance: number): string {
  const b = Number.isFinite(balance) ? Math.round(balance) : 0;
  return `👋 Добро пожаловать! Это автоматический бот для покупки серверов от Sephora.

Почему удобно заказывать услуги через бота?

— Не требуется регистрация - управление происходит через удобные кнопки.
— Быстрая оплата через криптовалюту.
— Высокая анонимность и конфиденциальность благодаря размещению инфраструктуры в оффшорных юрисдикциях.

💻 Поддержка: @s3phora_bot
📰 Новости проекта: @sephora_news

💵 Ваш баланс: ${b} $`;
}

const PROFILE_STATUS_RU: Record<string, string> = {
  newbie: "🆕 Новичок",
  user: "👤 Пользователь",
  admin: "👑 Админ",
};

const PROFILE_LINKS_RU =
  '<a href="https://t.me/sephora_sup">Support</a> | <a href="https://t.me/sephora_news">Sephora News</a>';

export interface ProfileTextRuParams {
  userId: number;
  statusKey: string;
  balanceStr: string;
  primeLine: string;
}

/** Профиль по-русски: ветки ├ │ └ как в английском профиле. */
export function getProfileTextRu(params: ProfileTextRuParams): string {
  const { userId, statusKey, balanceStr, primeLine } = params;
  const idSafe = String(userId).split("").join("&#8203;");
  const userStatus = PROFILE_STATUS_RU[statusKey] ?? "👤 Пользователь";
  return `<b>├ 💻 SEPHORA ПРОФИЛЬ</b>
│
└ <b>✅ СТАТИСТИКА</b>
    ├ ID: ${idSafe}
    ├ Статус: ${userStatus}
    ├ ${primeLine}
    └ Баланс: ${balanceStr} $

${PROFILE_LINKS_RU}`;
}
