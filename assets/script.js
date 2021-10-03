const BASE_URL = "https://c1200.js.org/discord-widget";
const URL_PARAMS = new URLSearchParams(location.search);
const THEME_SRC = URL_PARAMS.get("theme-src") || "themes/";
const THEME = THEME_SRC + (URL_PARAMS.get("theme") || "default") + ".css";
const DISCORD_WIDGET_DATA = `https://discord.com/api/guilds/${URL_PARAMS.get("id")}/widget.json`;

if (URL_PARAMS.has("id")) {
    fetch(DISCORD_WIDGET_DATA).then(async (res) => {
        var o = await res.json();

        if (res.ok) {
            function checkHash() { if (location.hash === "#join") location.href = o.instant_invite; }
            if (location.hash === "#join") location.hash = "";
            window.onhashchange = checkHash;

            $(".mount").find("[data-key]").each(function() {
                $(this).text(_.get(o, $(this).attr("data-key")));
            });

            fetch(THEME).then(res => res.text()).then((style) => {
                $(".mount").append(`<style>${style}</style>`);
                setTimeout(() => {
                    $(".mount .header").prepend(`<img class="discord-logo" src="${BASE_URL + $(":root").css("--header-logo")}" alt="Discord Logo">`);
                }, 200);
            });

            o.members.forEach(member => {
                $(".mount .online-members").append(`
                <div class="member">
                    <div class="avatar">
                        <img src="${member.avatar_url}">
                        <span data-status="${member.status}"></span>
                    </div>
                    <span class="username">
                        ${member.username}
                        ${member.game ? `<span class="game">Playing <b>${member.game.name}</b></span>` : ""}
                    </span>
                </div>
                `);
            });
        } else {
            $(".mount").text("Discord: " + o.message);
        }
    });
} else {
    $(".mount").text("`id` parameter unset");
}