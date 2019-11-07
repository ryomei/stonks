import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { AtomsModule } from 'atoms';
import { InputComponent } from './input.component'

storiesOf('Components | Call To Action', module)
    .addDecorator(withKnobs)
    .addDecorator(
        moduleMetadata({
            imports: [AtomsModule]
        }))
    .add('default',
        () => ({
            component: InputComponent,
            props: {}
        }),
        {
            notes: {
                markDown: `
            # Documentação
            **Selector**: bcpf-call-to-action

            | Angular Binding   | Propriedade   | Tipo              | Valor Padrão              | Obrigatória | Descrição                                                                         |
            |-------------------|---------------|-------------------|---------------------------|-------------|-----------------------------------------------------------------------------------|
            | Input             | visible       | boolean           | true                      | Sim         | Manipula a visibilidade do componente por meio da propriedade css _visibility_    |
            | Output            | click         | EventEmitter<any> | object                    | -           | Emite o objeto "$event"                                                           |
            `
            }
        }
    )

