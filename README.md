# C1200's Discord Widget

> An alternative widget for Discord servers

## Setup

Copy the below code into your website and replace `SERVER_ID` with your server ID.

```html
<iframe
    src="https://c1200.js.org/discord-widget?id=SERVER_ID" 
    width="450"
    height="500"
    allowtransparency="true"
    frameborder="0"
></iframe>
```

## Themes

You can change the theme of the widget by adding `&theme=` followed by the theme ID to the URL in the src attribute. The default theme is Default (Dark).

| Theme Name       | Theme ID      | Preview                                                                 |
|------------------|---------------|-------------------------------------------------------------------------|
| Default (Dark)   | default       | ![Image](https://c1200.js.org/discord-widget/preview/default.png)       |
| Default (Light)  | default-light | ![Image](https://c1200.js.org/discord-widget/preview/default-light.png) |
| Classic (Dark)   | classic       | ![Image](https://c1200.js.org/discord-widget/preview/classic.png)       |
| Classic (Light)  | classic-light | ![Image](https://c1200.js.org/discord-widget/preview/classic-light.png) |

You can also load themes from other locations by adding `&theme-src=` followed by a URL to a themes folder. The URL **MUST** end with a trailing `/`.

## Writing themes

### Classes

| Class                       | Part                                                                                                         |
|-----------------------------|--------------------------------------------------------------------------------------------------------------|
| .mount                      | Where all the main content is.                                                                               |
| .header                     | The header section.                                                                                          |
| .discord-logo               | The discord logo image.                                                                                      |
| .server-name                | The server name.                                                                                             |
| .main                       | The main section.                                                                                            |
| .online-header              | The online member counter.                                                                                   |
| .online-members             | The member list.                                                                                             |
| .member                     | An individual member.                                                                                        |
| .member .avatar             | The member's avatar and status. (Access image by using `img` and the status circle by using `[data-status]`) |
| .member .username           | The member's username and game (Accessible by using `.game`).                                                |
| .member .username .game     | The member's game.                                                                                           |
| .footer                     | The footer section.                                                                                          |
| .powered-by                 | The `Powered by C1200's Discord Widget` text.                                                                |
| .join                       | The join button.                                                                                             |

### Requirements

All themes must contain an icon url specified using `--header-logo` in the `:root` section. Example:

```css
:root {
    --header: #5865F2;
    --header-text: white;
    --header-logo: /assets/discord-logo.png; /* <- Here */

    --main: #2c2f33;
    --main-text: white;

    --footer: #212325;
    --footer-text: white;

    --online: #57F287;
    --idle: #FEE75C;
    --dnd: #ED4245;

    --join-btn: #4e5153;
    --join-btn-hover: #383a3b;
}
```