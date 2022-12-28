
__version__ = '0.1.0'
from nautobot.extras.plugins import PluginConfig


class TablineOneConfig(PluginConfig):
    name = "tabline_one"
    verbose_name = "Tabline One"
    version = __version__
    description = "For testing purposes only"
    nautobot_ui="tabline_one_ui"
    base_url = "tabline-one"


config = TablineOneConfig
