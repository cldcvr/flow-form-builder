import { html } from "lit";
import {
  FFormInputElements,
  FormBuilderField,
  FormBuilderGroup,
  FormBuilderRadioField,
} from "../f-form-builder-types";
import { Ref, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
export default function (
  name: string,
  _field: FormBuilderField,
  idx: number,
  fieldRef: Ref<FFormInputElements>,
  params?: Record<string, unknown>
) {
  const field = _field as FormBuilderRadioField;
  const group = params?.group as FormBuilderGroup;
  return html`
    <f-radio-group
      name=${name}
      id=${"form-ele" + idx}
      ${ref(fieldRef)}
      .options=${field.options}
      gap=${ifDefined(group?.gap)}
      .direction=${group?.direction}
      state=${ifDefined(field.state)}
      helperText=${ifDefined(field.helperText)}
    ></f-radio-group>
  `;
}
