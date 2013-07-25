# Knockout.Gravatar

A simple binding for knockout 2.* to turn an <img> image into a gravatar image.

## Installing

Just add the md5.js file (this is used to hash plain text emails), then knockout.gravatar.js to your project..

## Example

A simple example of adding a gravatar for a user:
```
<img id="some-gravatar-element" data-bind="gravatar: myUser.EmailAddress" /> 
```

A more complicated example with custom settings:
```
<img id="some-gravatar-element" data-bind="gravatar: { credential: myUser.Md5HashedEmailAddress, size: 25, defaultImage: 'wavatar', isSecure: true, rating: 'g' }" />
```

As shown above you can pass in the plain text email address, or if you dont want to publicly expose the users email address you can always just use the md5 hash of the email (md5.js has a hex_md5(plainText) method), or you can hash the user details on the server so the client has no access to them.

The available options for this binding are:

* **credential** - The users email or hashed email address to be used to uniquely identify this user to gravatar
* **size** - The size required for the generated image
* **defaultImage** - The default gravatar generated images to use if no custom avatar exists, i.e (wavatar, identicon)
* **rating** - The rating constraint for the images i.e (g, pg, r, x)
* **isSecure** - If you want to use https or http for getting the image

You can mix and match the properties, if it is provided then it will be used, if not dont worry about it.

There are some examples in the example.html file.