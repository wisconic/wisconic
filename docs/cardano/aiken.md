# Aiken

## Installation (Linux and MacOS)

- Follow along with [official docs](https://aiken-lang.org/installation-instructions)


We can use `aikup`:

```bash
curl -sSfL https://install.aiken-lang.org | bash
```

```output
Installing aikup...
######################################################################## 100.0%

Detected your preferred shell is zsh and added aikup to PATH. Run 'source /Users/****/.zshrc' or start a new terminal session to use aikup.
Then, simply run 'aikup' to install Aiken.
```

Start a new terminal session, or run `source ~/.zshrc`

```bash
source ~/.zshrc
```

Install latest available version

```bash
aikup
```

```output
aikup: no version specified; installing latest: v1.0.20-alpha


================================================================================

░█▀▀▄░▀█▀░▒█░▄▀░▒█▀▀▀░▒█▄░▒█             Modern and modular toolkit
▒█▄▄█░▒█░░▒█▀▄░░▒█▀▀▀░▒█▒█▒█       for Cardano Smart Contract development.
▒█░▒█░▄█▄░▒█░▒█░▒█▄▄▄░▒█░░▀█                 Written in Rust.

================================================================================

Repo       : https://github.com/aiken-lang/aiken
Docs       : https://aiken-lang.org/
Chat       : https://discord.gg/Vc3x8N9nz2
Contribute : https://github.com/aiken-lang/aiken/blob/main/CONTRIBUTING.md

================================================================================
aikup: installing aiken (version v1.0.20-alpha, tag v1.0.20-alpha)
aikup: downloading aiken
######################################################################################################### 100.0%
aikup: installed - aiken v1.0.20-alpha+49bd4ba
aikup: done
```

Start a new terminal session, or run `source ~/.zshrc`

```bash
source ~/.zshrc
```

Confirm `aiken` is installed.

```bash
aiken --help
```

You should see:

```output
Cardano smart contract language and toolchain

Usage: aiken <COMMAND>

Commands:
  new         Create a new Aiken project
  fmt         Format an Aiken project
  build       Build an Aiken project
  address     Compute a validator's address
  check       Type-check an Aiken project
  docs        Build the documentation for an Aiken project
  add         Add a new project package as dependency
  blueprint   Commands for working with Plutus blueprints
  packages    Managing project dependencies
  tx          Commands for working with transactions
  uplc        Commands for working with untyped Plutus-core
  completion  Generates shell completion scripts
  help        Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```


## Always Succeed

The most basic of validator scripts... _always succeed_



## Hello, World

- Follow along with [official docs](https://aiken-lang.org/example--hello-world)

Create `hello-world` aiken project.

```bash
aiken new aiken-lang/hello-world
```

You should see:

```output
Your Aiken project aiken-lang/hello-world has been successfully created.
The project can be compiled and tested by running these commands:

    cd hello-world
    aiken check
    aiken build

hint: You may want to update the stdlib version in aiken.toml.
```