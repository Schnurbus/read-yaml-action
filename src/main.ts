import * as core from '@actions/core'
import YAML from 'yaml'
import {promises as fs} from 'fs'

const run = async (): Promise<void> => {
  try {
    const file = core.getInput('file')

    const content = await fs.readFile(file, 'utf8')

    const yamlData = YAML.parse(content)

    const iterate = (parent: string, obj: {[x: string]: any}): void => {
      for (const key of Object.keys(obj)) {
        let prefix = ''
        if (parent !== '') {
          prefix = parent.concat('_')
        }

        if (typeof obj[key] === 'object') {
          iterate(prefix.concat(key), obj[key])
        } else {
          core.setOutput(prefix + key, obj[key])
        }
      }
    }

    iterate('', yamlData)
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
