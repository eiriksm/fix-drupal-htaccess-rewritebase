# fix-drupal-htaccess-rewritebase

[![Greenkeeper badge](https://badges.greenkeeper.io/eiriksm/fix-drupal-htaccess-rewritebase.svg)](https://greenkeeper.io/)

[![Coverage Status](https://coveralls.io/repos/eiriksm/fix-drupal-htaccess-rewritebase/badge.svg?branch=master)](https://coveralls.io/r/eiriksm/fix-drupal-htaccess-rewritebase?branch=master)
[![Code Climate](https://codeclimate.com/github/eiriksm/fix-drupal-htaccess-rewritebase/badges/gpa.svg)](https://codeclimate.com/github/eiriksm/fix-drupal-htaccess-rewritebase)
[![Build Status](https://travis-ci.org/eiriksm/fix-drupal-htaccess-rewritebase.svg?branch=master)](https://travis-ci.org/eiriksm/fix-drupal-htaccess-rewritebase)
[![Dependency Status](https://david-dm.org/eiriksm/fix-drupal-htaccess-rewritebase.svg)](https://david-dm.org/eiriksm/fix-drupal-htaccess-rewritebase)

Fixes the .htaccess file that fits my setup

## Installation

`npm i -g fix-drupal-htaccess-rewritebase`

## Usage

`$ fix-drupal-htaccess-rewritebase`

## What does it do?

Typically this:
```diff
diff --git a/drupal/.htaccess b/drupal/.htaccess
index 974999a..76d721b 100644
--- a/drupal/.htaccess
+++ b/drupal/.htaccess
@@ -120,7 +120,7 @@ AddEncoding gzip svgz
   #
   # If your site is running in a VirtualDocumentRoot at http://example.com/,
   # uncomment the following line:
-  # RewriteBase /
+  RewriteBase /
```
