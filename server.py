import uvicorn

from os import getenv
from site2md import create_app, Settings
from site2md.cache import KVCache
from site2md.config import kvConfig
from site2md.config import RateLimits
from site2md.limiting import MemoryRateLimiter

if __name__ == "__main__":
    kv_config = kvConfig(
        host="materiakv.eu-fr-1.services.clever-cloud.com",
        tls=True,
        password=getenv("KV_TOKEN"),
        ttl=3600,
    )

    cache = KVCache(config=kv_config)

    limits = RateLimits(
        global_rate=500,
        ip_rate=5,
        daily=50,
        weekly=200,
        monthly=500
    )
    limiter = MemoryRateLimiter(limits)

    settings = Settings(
        static_dir="static",
        max_content_size=5_000_000,
        cache_backend=cache,
        rate_limiter=limiter
    )

    app = create_app(settings)
    uvicorn.run(app, host=settings.host, port=settings.port)
