import hbs from "htmlbars-inline-precompile";
import { storiesOf } from "@storybook/ember";
import buttons from "./buttons.md";

storiesOf('buttons', module)
  .add(
    'primary button',
    () => {
      return {
        template: hbs`
              <div class="BourbonGroupContainer btw-m-4">
                {{bourbon-button class='BourbonButton--primary' title='Primary button' action=onClick}}
                {{bourbon-button title='Disabled' class='BourbonButton--primary BourbonButton--disabled'}}
              </div>
              {{bourbon-button class='BourbonButton--primary' title='Primary full width button' action=onClick fullWidth=true}}`,
        context: { onClick: 'click' }
      };
    },
    {
      notes: { markdown: buttons }
    }
  )
  .add(
    'secondary button',
    () => {
      return {
        template: hbs`
              <div class="BourbonGroupContainer btw-m-4">
                {{bourbon-button class='BourbonButton--secondary' title='secondary button' action=onClick}}
                {{bourbon-button title='Disabled' class='BourbonButton--secondary BourbonButton--disabled'}}
              </div>
              {{bourbon-button title='Secondary button' class='BourbonButton--secondary' action=onClick fullWidth=true}}`,
        context: { onClick: 'click' }
      };
    },
    {
      notes: { markdown: buttons }
    }
  )

  .add(
    'rounded button',
    () => {
      return {
        template: hbs`
                <div class="BourbonGroupContainer btw-m-4">
                  {{bourbon-button title='Setup guide' class='BourbonButton--primary BourbonButton--rounded' action=onClick data-hint='press the button' icon='new-tab'}}
                  {{bourbon-button title='Disabled' class='BourbonButton--primary BourbonButton--disabled BourbonButton--rounded'}}
                </div>
                {{#bourbon-button class='BourbonButton--primary BourbonButton--rounded' action=onClick data-hint='press the button' fullWidth=true}}
                  Rounded primary button full width
                {{/bourbon-button}}`,
        context: { onClick: 'click' }
      };
    },
    {
      notes: { markdown: buttons }
    }
  )

  .add(
    'delete button',
    () => {
      return {
        template: hbs`{{bourbon-button class='BourbonButton--delete' title='delete button'}}`
      };
    },
    {
      notes: { markdown: buttons }
    }
  )

  .add(
    'icon button',
    () => {
      return {
        template: hbs`{{bourbon-button icon='edit-button'}}`
      };
    },
    {
      notes: { markdown: buttons }
    }
  );
