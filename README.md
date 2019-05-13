# Woodhouse

![Woodhouse](https://i2.wp.com/www.bubbleblabber.com/wp-content/uploads/2015/06/Woodhouse.jpg)

online leasing front end

## Development Setup


### Run Chuck

Run Chuck locally at `localhost:8000` (default) with `docker-compose up`

Chuck handles all API functionality. Online Leasing endpoint specs can be found here:
https://nestiolistings.com/api/onlineleasing/api-doc/#/

### Chuck Config (settings_local.py)

Make sure the following is added to `settings_local.py` in Chuck to avoid cors issues
`
ALLOWED_HOSTS = '*'
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CORS_URLS_REGEX = r'^.*$'
CORS_ORIGIN_WHITELIST = (
    'localhost:8080',
    'https://vars.hotjar.com',
)
`

### Create LeaseSettings in Chuck

Create or identify a LeaseSettings object here: http://localhost:8000/admin/onlineleasing/leasesettings/

If you'd like to make a personalized link with associated client and/or unit data, you can create a hash in the shell with [PersonalizedHash](https://github.com/Nestio/chuck/blob/d6eadddac786af3a0af4acdaf017f1c5fc64a954/chuck/onlineleasing/utils.py#L6)


### Run Woodhouse

Install dependencies

    $ npm install

Start development server 

    $ npm start

Woodhouse runs at `localhost:3000`

Update the localhost url appending the LeaseSettings object optional personalized hash identified in the previous step like this:

format: `localhost:3000/{your-lease-settings-id}/v={your-optional-personalized-hash}`
without hash: `localhost:3000/1`
with hash: `localhost:3000/1/v=za7jDFkEML`
