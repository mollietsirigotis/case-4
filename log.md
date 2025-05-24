# How AI has helped me create this application

## The questions i've asked:

### Question 1

I asked chatgpt for a info button next to the search input-field.

The code i got: 

```
<style>
.info-container {
        position: relative;
        display: inline-block;
        margin-left: 8px;
    }

    .info-icon {
        background-color: #ddd;
        border-radius: 50%;
        padding: 0 6px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
    }

    .tooltip {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 8px;
        width: 220px;
        top: 25px;
        left: 0;
        z-index: 1;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }

    .info-container:hover .tooltip {
        display: block;
    }
</style>
    <span class="info-container">
        <span class="info-icon">i</span>
        <div class="tooltip">
            The Hogwarts houses are: Gryffindor, Slytherin, Ravenclaw and Hufflepuff. Choose one of them.
        </div>
    </span>
```

I used: 
The html and some of the css, but added and changed a few things to make it responsive and to make it look the way i want.

### Question 2:

I noticed that my page on an Ipad had a black line at the bottom of the page under the footer. Which was the background color of the body instead of showing the image the whole way down. So i copied my css from for the "body" element and pasted it and asked chatgpt why i am experiencing this.

The answer i got: 
```
Thanks for sharing your CSS! The issue you're seeing — a black background showing at the bottom on iPad — is likely due to a combination of:

1. min-height: 100% not fully accounting for the viewport height on mobile devices.

2. overflow: hidden possibly hiding content that's slightly overflowing due to browser UI quirks (especially on iOS).

3. Some mobile browsers not correctly interpreting 100% height — 100vh is more reliable in many cases.
```

I used this tip and changed my height to 100vh instead of 100%. I had 100vh on my css for the body element before but changed along the way due to some layout issues i was experiencing but now i managed to fix those issues by changing margin and padding.