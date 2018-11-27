Quadric's EasySearch-Elasticsearch
=====================

**Note**: This package is a fork of the [easysearch:elasticsearch](https://github.com/matteodem/meteor-easy-search/tree/master/packages/easysearch:elasticsearch) package with changes to make it compatible with Elasticsearch 2.1+.

This package adds an `EasySearch.ElasticSearch` engine to EasySearch. EasySearch synchronizes documents to an index called
__easysearch__, with types based on the collection name.

```javascript
// On Client and Server
let Players = new Meteor.Collection('players'),
  PlayersIndex = new EasySearch.Index({
    collection: Players,
    fields: ['name'],
    engine: new EasySearch.ElasticSearch({
      body: () => { ... } // modify the body that's sent when searching
    })
  });
```

## Configuration

The client doesn't require any configuration if ElasticSearch runs locally on port `9200`.
The configuration options that can be passed to `EasSearch.ElasticSearch` as an object are following.

* __client__: Object of [client configuration](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html) (such as the `host` and so on)
* __fieldsToIndex__: Array of document fields to index, by default all fields
* __query(searchObject, options)__: Function that returns the query, by default a `fuzzy multi_match` query
* __sort(searchObject, options)__: Function that returns the sort parameter, by default the index `fields`
* __getElasticSearchDoc(doc, fields)__: Function that returns the document to index, fieldsToIndex by default
* __body(body)__: Function that returns the ElasticSearch body to send when searching

## How to run ElasticSearch

```sh

# Install Elastic Search through brew.
brew install elasticsearch
# Start the service, runs on http://localhost:9200 by default.
elasticsearch -f -D es.config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
```

## How to install

```sh
cd /path/to/project
meteor add quadric:easy-elasticsearch
```
