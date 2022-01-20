import os
import yaml
from fastlab.decorators import WithEnvConfig


@WithEnvConfig(prefix='')
def load_config():
    return yaml.safe_load(open(f'{os.path.dirname(__file__)}/application.yml','r',encoding='utf-8'))


conf = load_config()
