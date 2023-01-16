# YAML Read Action

A Github action to read a yaml file and expose the key/value pairs as step outputs.

## Nested values
```yml
setting1: test1
setting2: test2
others:
  setting3: test3
  setting4: test4
```
will produce this outputs:
- outputs.settings1
- outputs.settings2
- outputs.others_settings3
- outputs.others_settings4

## Usage
```yml
      - uses: actions/checkout@v3

      - name: Read YAML file
        uses: schnurbus/read-yaml-action@v1
        with:
          file: ./settings.yaml
```

### Action inputs

| Name | Description | Default |
| --- | --- | --- |
| `file` | `Path to YAML file` | `` |

### Action outputs

Depending of the key/value pairs in the YAML file.