- When you run a command in the terminal, where does BASH look for that command?

When you run a command in the terminal, BASH looks for that command in the folders listed in your $PATH global environment variable,
your current aliases, and commands built in to the shell (BUILTIN).

- On a UNIX computer, how do you stop a running process?

On a UNIX computer, you can stop a running process with control-c from within the process. Additionally, you can use the top or ps command to find the process ID (PID) of a particular running process and then use the kill command to kill that process.

- What packages do you have installed via homebrew?

I have the following packages installed via homebrew:
git, hub, icu4c, node, nvm, openssl, postgresql, readline, tree

I have the following packages installed via homebrew's cask extension:
atom caffeine dash growlnotify iterm2 java postico postman screenhero slack spectacle

- On a UNIX computer, how do you find the process id of a running process?

You can use the top or ps command to find the process ID (PID) of a running process. Top is a task manager whereas ps lists all your currently owned processes.

- In a terminal, what does control-c do?

Control-c sends the SIGINT(interrupt) signal to the current foreground process attached to the terminal. Unless that process has some means of dealing with the interrupt signal, it generally kills the process immediately.

- In a terminal, what does control-a do?
- In a terminal, what does control-e do?
- What keyboard shortcut do you use to split the screen in your editor?
- What keyboard shortcut do you use to split the screen in your terminal?
- When a terminal command completes, how can you tell if it was successful or not?
- What does your `~/.gitconfig` have in it? (paste the whole file here)
- What is the difference between a relative and absolute path?
- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   ├── README.md
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to change folders to the `pinterest-for-dogs` folder?

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
- What files or folders do you want all git repositories to ignore?
- What is the main difference between `==` and `===` in JavaScript?
