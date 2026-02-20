
>
> # ***[`Nothing Here`]()***  
>

![Hi!](Screenshot_20260127_172511_Minecraft.jpg)

```js  
import { world, system } from '@minecraft/server';  

system.runInterval(() => {  
    for (const player of world.getAllPlayers) {  
        player.runCommandAsync("say §dHello!")  
    }  
}, 60);  
```  

<script src=buttonClick.js defer></script>  

<button onclick="copyCode()">Copy</button>