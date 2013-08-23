glazier-github-issue
====================

A card for viewing a github issue.

## Adding to glazier

    # in `glazier/cards/`
    ln -s your/path/to/glazier-github-issue github-issue

    # in `glazier/`
    grunt ingestCards

    # in `glazier/glazier-server/`
    bundle exec rails console

    # add the Pane to the dashboard of your choosing
    db = Dashboard.where(repository: 'emberjs/ember.js').first
    db.add_pane('glazier-github-issue')


## Running Tests
  grunt autotest

  # view in browser
  open dist/dev/github-issue/test.html
