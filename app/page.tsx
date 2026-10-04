export default function Page() {
  return (
    <div className="f7xq-shell">
      {/* ===== Герой ===== */}
      <header className="f7xq-hero" id="flagman-casino">
        <div className="f7xq-wrap">
          <div className="f7xq-hero-inner">
            <div className="f7xq-hero-copy">
              <span className="f7xq-kicker">Онлайн-казино · Лицензия · Быстрые выплаты</span>
              <h1 className="f7xq-title">
                Flagman Casino — <span className="f7xq-accent">официальный сайт</span> и рабочее
                зеркало
              </h1>
              <p className="f7xq-lead">
                Flagman Casino — это проверенное онлайн-казино с лицензионными слотами, живыми
                дилерами и честными выплатами. Играйте с любого устройства — вход занимает меньше
                минуты.
              </p>
            </div>
            <div className="f7xq-hero-media">
              <img
                src="/images/flagman-hero.jpg"
                alt="Flagman Casino — официальный сайт: фишки, карты и кости на зелёном сукне"
                width={1200}
                height={800}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ===== Секция 1 ===== */}
        <section className="f7xq-section" id="flagman-casino-oficialnyj-sajt">
          <div className="f7xq-wrap">
            <div className="f7xq-section-inner">
              <div className="f7xq-section-copy">
                <h2 className="f7xq-h2">
                  Flagman Casino — <span className="f7xq-accent">официальный сайт</span>
                </h2>
                <p className="f7xq-text">
                  Flagman Casino официальный сайт открывает доступ к полной коллекции игр без
                  посредников и лишних шагов. Здесь собраны лицензионные слоты, рулетка, блэкджек и
                  живые столы с настоящими дилерами.
                </p>
                <p className="f7xq-text">
                  Официальный сайт Flagman Casino работает стабильно и защищает данные игроков
                  современным шифрованием. Регистрация занимает пару минут, а первый депозит сразу
                  приносит приветственный бонус на счёт.
                </p>
              </div>
              <div className="f7xq-section-media">
                <div className="f7xq-media">
                  <img
                    src="/images/flagman-slots.jpg"
                    alt="Лицензионные слоты на официальном сайте Flagman Casino"
                    width={1000}
                    height={667}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Секция 2 ===== */}
        <section className="f7xq-section f7xq-section--alt" id="flagman-casino-zerkalo">
          <div className="f7xq-wrap">
            <div className="f7xq-section-inner f7xq-section-inner--reverse">
              <div className="f7xq-section-copy">
                <h2 className="f7xq-h2">
                  Flagman Casino <span className="f7xq-accent">зеркало</span>
                </h2>
                <p className="f7xq-text">
                  Flagman Casino зеркало — это точная копия основного портала, которая помогает
                  обходить технические ограничения. Если основной адрес временно недоступен, рабочее
                  зеркало Flagman Casino сохраняет ваш аккаунт, баланс и историю ставок.
                </p>
                <p className="f7xq-text">
                  Зеркало Flagman Casino обновляется регулярно, поэтому вход остаётся быстрым и
                  безопасным в любой момент. Все бонусы и настройки аккаунта полностью
                  синхронизированы.
                </p>
              </div>
              <div className="f7xq-section-media">
                <div className="f7xq-media">
                  <img
                    src="/images/flagman-mobile.jpg"
                    alt="Рабочее зеркало Flagman Casino на смартфоне"
                    width={1000}
                    height={667}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Секция 3 ===== */}
        <section className="f7xq-section" id="flagman-casino-igrat-online">
          <div className="f7xq-wrap">
            <div className="f7xq-section-inner">
              <div className="f7xq-section-copy">
                <h2 className="f7xq-h2">
                  Флагман казино <span className="f7xq-accent">играть онлайн</span>
                </h2>
                <p className="f7xq-text">
                  Флагман казино играть онлайн можно прямо сейчас — с телефона, планшета или
                  компьютера. Онлайн-режим Флагман казино не требует скачивания: достаточно открыть
                  сайт в браузере и выбрать любимую игру.
                </p>
                <p className="f7xq-text">
                  Флагман казино онлайн поддерживает быстрые платежи и вывод выигрышей на карту или
                  электронный кошелёк. Играйте в демо-режиме бесплатно или на реальные деньги.
                </p>
              </div>
              <div className="f7xq-section-media">
                <div className="f7xq-grid">
                  <div className="f7xq-card">
                    <h3 className="f7xq-card-title">Быстрые выплаты</h3>
                    <p className="f7xq-card-text">
                      Вывод выигрышей на карту или кошелёк без скрытых комиссий.
                    </p>
                  </div>
                  <div className="f7xq-card">
                    <h3 className="f7xq-card-title">Лицензионные слоты</h3>
                    <p className="f7xq-card-text">
                      Только проверенные игры от ведущих мировых провайдеров.
                    </p>
                  </div>
                  <div className="f7xq-card">
                    <h3 className="f7xq-card-title">Поддержка 24/7</h3>
                    <p className="f7xq-card-text">
                      Служба поддержки отвечает на вопросы в чате круглосуточно.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Секция 4 ===== */}
        <section className="f7xq-section f7xq-section--alt" id="flagman-casino-oficialnyj">
          <div className="f7xq-wrap">
            <div className="f7xq-section-inner">
              <div className="f7xq-section-copy">
                <h2 className="f7xq-h2">
                  Флагман казино <span className="f7xq-accent">официальный сайт</span>
                </h2>
                <p className="f7xq-text">
                  Флагман казино официальный сайт гарантирует честные результаты и защиту личных
                  данных. На официальном сайте Флагман казино вы найдёте актуальные бонусы, турниры
                  и программу лояльности для постоянных игроков.
                </p>
                <p className="f7xq-text">
                  Флагман казино официальный ресурс работает круглосуточно, а служба поддержки
                  отвечает на вопросы в чате 24/7. Пополнение счёта и вывод средств проходят без
                  скрытых комиссий.
                </p>
              </div>
              <div className="f7xq-section-media">
                <div className="f7xq-media">
                  <img
                    src="/images/flagman-hero.jpg"
                    alt="Флагман казино официальный сайт — честная игра и бонусы"
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Секция 5 ===== */}
        <section className="f7xq-section" id="flagman-casino-zerkalo-rabochee">
          <div className="f7xq-wrap">
            <div className="f7xq-section-inner f7xq-section-inner--reverse">
              <div className="f7xq-section-copy">
                <h2 className="f7xq-h2">
                  Флагман казино <span className="f7xq-accent">зеркало рабочее</span>
                </h2>
                <p className="f7xq-text">
                  Флагман казино зеркало рабочее — это актуальная ссылка, которая всегда под рукой.
                  Рабочее зеркало Флагман казино позволяет продолжать игру без перерывов, даже если
                  основной домен временно заблокирован.
                </p>
                <p className="f7xq-text">
                  Флагман казино зеркало сохраняет все функции: пополнение счёта, вывод средств и
                  доступ к любимым слотам. Добавьте рабочее зеркало в закладки, чтобы не терять
                  доступ к игре.
                </p>
              </div>
              <div className="f7xq-section-media">
                <div className="f7xq-media">
                  <img
                    src="/images/flagman-slots.jpg"
                    alt="Флагман казино зеркало рабочее — доступ к слотам без перерывов"
                    width={1000}
                    height={667}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Подвал ===== */}
      <footer className="f7xq-footer">
        <div className="f7xq-wrap">
          <h2 className="f7xq-footer-title">Навигация по сайту</h2>
          <nav className="f7xq-tags" aria-label="Хештеги для поиска по сайту">
            <a className="f7xq-tag" href="#flagman-casino">
              #flagman casino
            </a>
            <a className="f7xq-tag" href="#flagman-casino-oficialnyj-sajt">
              #flagman casino официальный сайт
            </a>
            <a className="f7xq-tag" href="#flagman-casino-zerkalo">
              #flagman casino зеркало
            </a>
            <a className="f7xq-tag" href="#flagman-casino-oficialnyj">
              #flagman casino официальный
            </a>
            <a className="f7xq-tag" href="#flagman-casino-oficialnyj-sajt">
              #флагман казино официальный сайт
            </a>
            <a className="f7xq-tag" href="#flagman-casino">
              #флагман казино
            </a>
            <a className="f7xq-tag" href="#flagman-casino-igrat-online">
              #flagman casino играть
            </a>
            <a className="f7xq-tag" href="#flagman-casino-zerkalo-rabochee">
              #флагман казино зеркало рабочее
            </a>
            <a className="f7xq-tag" href="#flagman-casino">
              #flagman казино
            </a>
            <a className="f7xq-tag" href="#flagman-casino-igrat-online">
              #флагман казино онлайн
            </a>
            <a className="f7xq-tag" href="#flagman-casino-oficialnyj">
              #флагман казино официальный
            </a>
            <a className="f7xq-tag" href="#flagman-casino-igrat-online">
              #флагман казино играть
            </a>
            <a className="f7xq-tag" href="#flagman-casino-zerkalo">
              #флагман казино зеркало
            </a>
          </nav>
          <p className="f7xq-footer-note">
            18+ Играйте ответственно. Flagman Casino — официальный сайт и рабочее зеркало для игры
            онлайн. Азартные игры могут вызывать зависимость.
          </p>
        </div>
      </footer>
    </div>
  )
}
