# What is VertNet-app?

VertNet-app is the web application for the VertNet project. It rides on ClojureScript and is deployed to CouchDB as an HTML5 CouchApp. 

# Developing

VertNet rides on the ClojureScript One framework. If you're new to ClojureScript One, watch this quick video. 

To get started, let's fire up our command line and clone the project:

```bash
$ git clone git@github.com:eightysteele/vertnet-app.git
$ cd vertnet-app
```

Next we'll download all of the project dependencies using Leiningen, the build tool for Clojure. To install it, first let's  make sure that we have a `~/bin` directory on our path by editing `~.bashrc` and adding `export PATH=$PATH:~/bin`. Next:

```bash
$ cd ~/bin 
$ curl -O https://raw.github.com/technomancy/leiningen/stable/bin/lein
$ chmod 755 lein
```

That's it! Now we're ready to download all of the project dependencies and test it.

```bash
$ script/deps
$ script/run # ctl-c to quit
$ script/cljs-repl # ctl-c to quit
```

When that's done, let's fire up Emacs and get a browser-connected REPL going!

```bash
# Change working directory to vertnet-app.
M-x cd
 
# Start the REPL (the browser will open automatically).
C-u M-x inferior-lisp
script/cljs-repl 

# You should see an alert in the browser.
ClojureScript:cljs.user> (js/alert "BOOM!") 
```

# Deploying

VertNet is deployed to CouchDB as an HTML5 CouchApp. To make deploying easier, let's install the `couchapp` Python script:

```bash
$ pip install couchapp
```

The CouchApp configuration file is located in `app/.couchapprc`. That's where we specify our CouchDB server and credentials.

To deploy:

```bash
$ script/deploy
```

VertNet is now deployed to CouchDB!

