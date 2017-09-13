- When you run a command in the terminal, where does BASH look for that command?
```
When you run a command in the terminal, BASH looks for that command in the folders listed in your $PATH global environment variable,
your current aliases, and commands built in to the shell (BUILTIN).
```
- On a UNIX computer, how do you stop a running process?
```
On a UNIX computer, you can stop a running process with control-c from within the process. Additionally, you can use the top or ps command to find the process ID (PID) of a particular running process and then use the kill command to kill that process.
```
- What packages do you have installed via homebrew?
```
I have the following packages installed via homebrew:
git, hub, icu4c, node, nvm, openssl, postgresql, readline, tree

I have the following packages installed via homebrew's cask extension:
atom caffeine dash growlnotify iterm2 java postico postman screenhero slack spectacle
```
- On a UNIX computer, how do you find the process id of a running process?
```
You can use the top or ps command to find the process ID (PID) of a running process. Top is a task manager whereas ps lists all your currently owned processes.
```
- In a terminal, what does control-c do?
```
Control-c sends the SIGINT(interrupt) signal to the current foreground process attached to the terminal. Unless that process has some means of dealing with the interrupt signal, it generally kills the process immediately.
```
- In a terminal, what does control-a do?
```
Control-a moves to the beginning of the line.
```
- In a terminal, what does control-e do?
```
Control-e moves to the end of the line.
```
- What keyboard shortcut do you use to split the screen in your editor?
```
In Atom it is Command + K + Arrow Direction.
```
- What keyboard shortcut do you use to split the screen in your terminal?
```
In iTerm2 you use Command + D to split the screen vertically and Command + Shift + D to split the screen horizontally.
```
- When a terminal command completes, how can you tell if it was successful or not?
```
You can tell if a terminal command completed successfully by checking the exit status of that command. You can type echo $? which will output an integer number. Any number other than 0 means that your command didn't complete successfully.
```
- What does your `~/.gitconfig` have in it? (paste the whole file)

```
[alias]
  co = checkout
  ci = commit
  st = status --short --branch
  l  = log --oneline --decorate --graph --relative-date --show-signature
  ls-untracked-files = !git-ls-files -o --exclude-standard
  ls-ignored-files = !git-ls-files --others -i --exclude-standard
  ls-modified-files = !git-ls-files -m
[color]
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
[color "status"]
  added = green
  changed = yellow
  untracked = red
[user]
	name = Joshua Elder
	email = aresx130@gmail.com
[core]
  excludesfile = ~/.gitignore
  autocrlf = false
  pager = less -F -X
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
[apply]
  whitespace = fix
[push]
  default = upstream
[branch]
  autosetuprebase = always
  autosetupmerge = true
[mergetool "diffmerge"]
  cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
  trustExitCode = false
[rebase]
  autosquash = true
[rerere]
  enabled = true
  autoupdate = true
[help]
  autocorrect = 50
```

- What is the difference between a relative and absolute path?
```
An absolute path always points to the same directory regardless of the working directory and therefore the path must start from the root directory. A relative path is relative to the working directory and doesn't require starting the path from the root directory.
```
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
```
  cd ../pinterest-for-dogs
```
- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
```
In Atom I would use Command + B
```
- What files or folders do you want all git repositories to ignore?
```
OS files, log files, local caches files or temporary directories, and the node_modules directory. For example my global .gitignore file is below:

# Numerous always-ignore extensions
*.diff
*.err
*.log
*.orig
*.rej
*.swo
*.swp
*.vi
*.zip
*~

# OS or Editor files
._*
.cache
.DS_Store
.idea
.project
.settings
.tmproj
*.esproj
*.sublime-project
*.sublime-workspace
.irb-save-history
.pairs
.tags
.tags_sorted_by_file
.irb-save-history
.gems
.bin
.tags
.tags_sorted_by_file
.apdisk
.DS_Store
.sass-cache
.fseventsd
.bundle
chromedriver.log
.pryrc
.irbrc
libpeerconnection.log
.irb-save-history
.eslintcache
.scss-lint-cache

# Folders to ignore
bower_components
node_modules
.sass-cache
/tmp

```
- What is the main difference between `==` and `===` in JavaScript?
```
The main difference between `==`(equality operator) and the `===`(identity operator) is that the identity operator doesn't perform type conversion on the two values being compared.
```
