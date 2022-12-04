# sustain-hacks

[Backend code](https://github.com/jsqvl/sustain-hacks-backend)
How It Works
Given an article of clothing from a website (via one of the 3 methods above), Decode will web-scrape the page to determine clothing information like the blend of materials (80% cotton, 20% polyester), clothing type, brand, and weight.

Using this information, Decode will run its sustainability, quality, and number of washes algorithms based on sustainable clothing research. Decode will then give you:

A sustainability rating based on the materials (score out of 10)
The fabric quality (score out of 10)
The estimated number of washes before product needs to be replaced
Tips to maximize that specific clothing's lifetime
Similar items in the database with high sustainability scores
How We Built It
Like most projects, it all started with a brainstorming session going over different problems tackling sustainability. Fashion just so happened to be the one topic we all agreed upon, and once we decided in this specific direction, we went straight into Figma to start building brand identity, grey-scale and high-fidelity wireframes. We followed the double diamond design process to explore many options in design and synthesizing our findings to build the most compelling solution for our end users.

There was also extensive secondary research done on the sustainability, fabric quality, and number of washes, which was used to create equations in the backend.

Between the two coders, we split responsibilities into frontend and backend. For the frontend, we started by getting the Chrome Extension live, managing the user workflow, and styling the website. The backend was setup with Python/Flask. Then, functions were made using the secondary research to generate the results.
