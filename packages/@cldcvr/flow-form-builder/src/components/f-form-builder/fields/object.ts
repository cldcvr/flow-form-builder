import { html } from "lit";
import {
  FFormInputElements,
  FormBuilderField,
  FormBuilderObjectField,
} from "../mixins/types";
import { Ref, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
export default function (
  name: string,
  _field: FormBuilderField,
  fieldRef: Ref<FFormInputElements>
) {
  const field = _field as FormBuilderObjectField;
  return html`
    <f-form-object
      name=${name}
      ${ref(fieldRef)}
      .config=${field}
      state=${ifDefined(field.state)}
      @click=${ifDefined(field.onClick)}
      @focus=${ifDefined(field.onFocus)}
      @input=${ifDefined(field.onInput)}
      @keypress=${ifDefined(field.onKeyPress)}
      @keydown=${ifDefined(field.onKeyDown)}
      @keyup=${ifDefined(field.onKeyUp)}
      @mouseover=${ifDefined(field.onMouseOver)}
    >
    </f-form-object>
  `;
}
