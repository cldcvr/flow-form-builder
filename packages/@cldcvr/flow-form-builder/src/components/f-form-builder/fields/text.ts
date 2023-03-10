import { html } from "lit";
import { FFormInputElements, FormBuilderField, FormBuilderTextInputField } from "../../../types";
import { Ref, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
export default function (
	name: string,
	_field: FormBuilderField,
	fieldRef: Ref<FFormInputElements>,
	value: unknown
) {
	const field = _field as FormBuilderTextInputField;
	return html`
		<f-input
			name=${name}
			.type=${field.type}
			${ref(fieldRef)}
			.placeholder=${field.placeholder}
			.value=${value}
			data-qa-element-id=${field.qaId || field.id}
			icon-left=${ifDefined(field.iconLeft)}
			icon-right=${ifDefined(field.iconRight)}
			prefix=${ifDefined(field.prefix)}
			suffix=${ifDefined(field.suffix)}
			state=${ifDefined(field.state)}
			.suffixWhen=${field.suffixWhen}
			max-length=${ifDefined(field.maxLength)}
			?loading=${field.loading ?? false}
			?disabled=${field.disabled ?? false}
			?clear=${field.clear ?? true}
			?read-only=${field.readonly ?? false}
			@click=${ifDefined(field.onClick)}
			@focus=${ifDefined(field.onFocus)}
			@input=${ifDefined(field.onInput)}
			@keypress=${ifDefined(field.onKeyPress)}
			@keydown=${ifDefined(field.onKeyDown)}
			@keyup=${ifDefined(field.onKeyUp)}
			@mouseover=${ifDefined(field.onMouseOver)}
		>
			${field.label?.title
				? html` <f-div
						slot="label"
						padding="none"
						gap="none"
						data-qa-label-for=${field.qaId || field.id}
						>${field.label.title}</f-div
				  >`
				: name
				? html`<f-div
						slot="label"
						padding="none"
						gap="none"
						data-qa-label-for=${field.qaId || field.id}
						>${name}</f-div
				  >`
				: ""}
			${field.label?.description
				? html` <f-div slot="description" padding="none" gap="none"
						>${field.label.description}</f-div
				  >`
				: ""}
			${field.helperText
				? html`<f-div slot="help" data-qa-help-for=${field.qaId || field.id}
						>${field.helperText}</f-div
				  >`
				: ``}
			${field.label?.iconTooltip
				? html`
						<f-icon
							slot="icon-tooltip"
							source="i-question-filled"
							size="small"
							state="subtle"
							data-qa-info-icon-for=${field.qaId || field.id}
							.tooltip="${field.label?.iconTooltip}"
							clickable
						></f-icon>
				  `
				: ""}
		</f-input>
	`;
}
