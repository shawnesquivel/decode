# sustain-hacks
This is our submission to [Sustain Hacks 2022](https://organize.mlh.io/participants/events/8826-sustainhacks). This is just the chrome extension, simply add to your chrome to use it.

- [YouTube Demo](https://www.youtube.com/watch?v=ZcLToAFm-wI)
- [Devpost](https://devpost.com/software/decode-z8ecsg)
- [Backend](https://github.com/jsqvl/sustain-hacks-backend)

## Fight Back Against Fast Fashion

To combat greenwashing, we created Decode. Decode helps analyze pieces of clothing and rates how sustainable they are based on what materials they are made of. Users can use Decode in three ways:

1. Download the chrome extension and use it on specific clothing pages as they online shop
2. Copy and paste the URL of a clothing item into our website, or
3. Manually input the clothing information on our website


## How It Works
Given an article of clothing from a website (via one of the 3 methods above), Decode will web-scrape the page to determine clothing information like the blend of materials (80% cotton, 20% polyester), clothing type, brand, and weight.

Using this information, Decode will run its sustainability, quality, and number of washes algorithms based on sustainable clothing research. Decode will then give you:
1. A sustainability rating based on the materials (score out of 10)
2. The fabric quality (score out of 10)
3. The estimated number of washes before product needs to be replaced
4. Tips to maximize that specific clothing's lifetime
5. Similar items in the database with high sustainability scores

## How We Built It

Like most projects, it all started with a brainstorming session going over different problems tackling sustainability. Fashion just so happened to be the one topic we all agreed upon, and once we decided in this specific direction, we went straight into Figma to start building brand identity, grey-scale and high-fidelity wireframes. We followed the double diamond design process to explore many options in design and synthesizing our findings to build the most compelling solution for our end users.

There was also extensive secondary research done on the sustainability, fabric quality, and number of washes, which was used to create equations in the backend.

Between the two coders, we split responsibilities into frontend and backend. For the frontend, we started by getting the Chrome Extension live, managing the user workflow, and styling the website. The backend was setup with Python/Flask. Then, functions were made using the secondary research to generate the results.

## How to upload to Chrome Extensions
1. Download the repository by clicking the green button <Code> and downloading the zip file to your PC.
![image](https://user-images.githubusercontent.com/94336773/205824559-44b6eebb-7457-4c4b-a541-18170953f509.png)
2. In the top right corner of your Google Chrome, click the Extensions Icon and click Manage Extensions. If you can't find this button, just type: chrome://extensions/ into the address field.
![image](https://user-images.githubusercontent.com/94336773/205824846-9e4dd48f-7c4a-44ea-9e81-5745bfe58589.png)
3. Click Load unpacked 
![image](https://user-images.githubusercontent.com/94336773/205824981-d6968d6f-e3b2-4b2f-a29d-820cb1156fdd.png)
4. Select the entire folder you just downloaded from GitHub.
5. It should appear as following. Make sure the blue button is toggled.
![image](https://user-images.githubusercontent.com/94336773/205825028-7a9b144b-7a76-40f8-9cf5-4c4753ea2e8a.png)
6. The Chrome extension will now be in your Extensions. Click the Pin to place it on your pinned extensions bar, so you can easily use it when you're on a product page.
![image](https://user-images.githubusercontent.com/94336773/205825210-b9f1025c-5d47-4b21-9a91-bbacd4859da1.png)
7. You're all set to go! Simply click the extension to get sustainability ratings on your clothes instantly.
![image](https://user-images.githubusercontent.com/94336773/205825286-12b117b0-f76c-4165-b35d-8d506c5f5968.png)


# Contributors
- github.com/shawnesquivel frontend
- github.com/jqvl backend (check out his repo)

