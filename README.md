# What is VertNet-app?

VertNet-app is the web application for the [VertNet](http://vertnet.org) project. It rides on [ClojureScript](https://github.com/clojure/clojurescript) (the [Clojure](http://clojure.org/) to JavaScript compiler which leverages [Google Closure Tools](http://code.google.com/closure)), and is deployed to [CouchDB](couchdb.apache.org) as an HTML5 [CouchApp](http://couchapp.org). 

# Developing

VertNet leverages the [ClojureScript One](http://clojurescriptone.com) framework. For a good introduction to it, watch this quick [video](http://vimeo.com/35153207). 

VertNet also rides on [CouchDB](couchdb.apache.org), so we'll need to have that installed. Note that when we're _developing_ the app, we'll need our CouchDB configuration file (e.g., `/etc/couchdb/default.ini`) to allow [JSONP](http://en.wikipedia.org/wiki/JSONP) since our _development_ app server is different than our CouchDB server. In production, the app server is CouchDB!


```bash
[httpd]
allow_jsonp = true
# Other options...
```

Our app will access CouchDB using the [Jaki](https://github.com/pandeiro/jaki/blob/master/src/jaki/couch.cljs) ClojureScript client that wraps the CouchDB REST API.

To get started developing, let's fire up our command line and clone the project:

```bash
$ git clone git@github.com:eightysteele/vertnet-app.git
$ cd vertnet-app
```

Next we'll download all of the project dependencies using [Leiningen](https://github.com/technomancy/leiningen), the build tool for Clojure. To install it, first let's  make sure that we have a `~/bin` directory on our path by editing `~.bashrc` and adding `export PATH=$PATH:~/bin`. Next:

```bash
$ cd ~/bin 
$ curl -O https://raw.github.com/technomancy/leiningen/stable/bin/lein
$ chmod 755 lein
```

That's it! Now we're ready to download all of the project dependencies and test it.

```bash
$ script/deps
$ script/run # This is just a sanity check! Press ctl-c to quit.
```

When that's done, let's fire up Emacs and get a browser-connected REPL going!

```bash
# Change working directory to vertnet-app.
M-x cd <ENTER> /path/to/vertnet-app
 
# Start the REPL (the browser will open automatically).
C-u M-x <ENTER> inferior-lisp <ENTER>
script/cljs-repl <ENTER>

# You should see an alert in the browser.
ClojureScript:cljs.user> (js/alert "BOOM!") <ENTER> 
```

# Deploying

VertNet is deployed to CouchDB as an HTML5 CouchApp. To make deploying easier, let's install the `couchapp` Python script:

```bash
$ pip install couchapp
```

The CouchApp [configuration file](http://couchapp.org/page/couchapp-config) is located in `vertnet-app/couchapp/.couchapprc`. That's where we specify our CouchDB server and credentials.

To deploy:

```bash
$ script/deploy
```

VertNet is now deployed to CouchDB!

