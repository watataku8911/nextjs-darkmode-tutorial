import { useEffect, useState } from "react";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (e) => {
    setDarkTheme(e.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return (
    <div className="container">
      <nav>
        <div className="title">私のポートフォリオ</div>
        <div>
          <form action="#">
            <label className="switch">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={handleToggle}
              />
              <span className="slider"></span>
            </label>
          </form>
        </div>
      </nav>
      <section>
        <div className="content">
          <h1>Watatakuのポートフォリオ🚀 </h1>
          <h3>関西のフロントエンドエンジニアです。</h3>
          <p>
            このサイトはNext.jsでダークモード、ライトモードの変更の仕方を学習するために作ったサンプルページであり、実運用はしていません。
          </p>
          <button className="primary-btn">お問い合わせ</button>
        </div>
      </section>
    </div>
  );
}
