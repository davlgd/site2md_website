# site2md website

A tool to convert any website to Markdown through an API or a dedicated web page. Based on [site2md](https://github.com/davlgd/site2md).

## Deploy on Clever Cloud

Install Clever Tools and create a Python application:

```bash
npm i -g clever-tools
clever login

git clone https://github.com/davlgd/site2md_website.git
cd site2md_website

clever create --type python
```

Set the environment variables:

```bash
clever env set CC_PRE_BUILD_HOOK "npm i && npm run build"
clever env set CC_RUN_COMMAND "uv run -m server"
```

If you want to add a Materia KV Cache (use the application alias with `--link` if different from the folder name):

```bash
clever addon create kv $(basename $PWD) --link $(basename $PWD)
```

Deploy the application:

```bash
clever deploy
clever open
```

## License

This project is licensed under the MIT License.
