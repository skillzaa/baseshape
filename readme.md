## This is a starting setup for a Typescript based project
- Our main targets are : 
    -   To use "typescript" compiler to compile ts files into js.
    -   To use "rollup" for final out put ie from src folder into dist folder.
    - To use "jest" for unit testing.
-   All the code goes into "typescript" forlder. When we want to compile we just run "tsc" command on the terminal and all the .ts files are compiled and moved into "src" folder.
- The src folder should never have anything that needs to be manually ammended or can not be over written. The src folder is just a compilation folder and not for coding or manual work.You should be able to delete anything in src folder without any loass to the project.similarly all the written code should just be in typescript folder and no where else.
- The main folders on root directory are:
    -   src
    -   typescript
    -   dist
    -   tests
    -   testsrc : files in required (common js) format to be used with jest.
- if we use rollup normally we use the configuration file "rollup.config.js". But this allow us to use just one configuration. We use this option with "rollup -c" command on terminal.
- to use more configuration of rollup we will have to create config files with different names and then add commands into package.json so that we can run different configs for tests etc.
- you can install all the dependencies listed in "config.json" by "npm install".
- once can check the version by commands like "npm -v", "typescript -v" , "jest -v" etc
- the file "rollup.config.t.js" is named this and not "rollup.config.test.js" since when we put test in the name the jest start to check it.
- any script located in the script section of config.json like the follwoing can be run using "npm run xxx".
"scripts": {
    "buildTest": "rollup -c rollup.config.t.js",
    "buildDist": "rollup -c rollup.config.dist.js",
    "dev": "rollup -c -w",
    "test": "jest ",
    "pretest": "npm run buildTest && npm run buildDist"
  },
  e.g "npm run buildTest" , "npm run buildDist" etc
  - One of the script among the above scripts is named "pretest" this will run before the script "test" is run. This way we can chain running of tasks that we used to do in gulp"
  - To use this system you have to compile in 2 steps
    - first step is typeing "tsc" or we can used "tsc --watch" and can leave it running in a terminal instance.
    - second step is to run "npm run buildTest or buildDist". after that we can test or distribute.
    - if we directly run "npm run test" it will pre run "buildTest" also
# The Problem of Testing ES-6 Modules
the main problem is that jest can not use es-6 modules thus need to have cjs module. We can use rollup to create a cjs module BUT there can only be one such file in a folder (called the main / index). So if we need to test more than 1 modules we have to make the main file provide them. For example the bilzaa2d should also expose Timer module.
