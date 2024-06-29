import Joi from "joi";

export interface email {
  fullName: string;
  phoneNumber: string;
  salary: string;
  bank: string;
  work?: string;
}

export const emailSchema = Joi.object<email>({
  fullName: Joi.string().min(1).required().messages({
    "any.required": "يرجى ادخال الاسم بالكامل ",
    "string.min": "يرجى ادخال الاسم بالكامل ",
  }),
  phoneNumber: Joi.string()
    .pattern(/^05\d{8}$/)
    .required()
    .messages({
      "string.pattern.base": "يرجى ادخال رقم الهاتف",
      "any.required": "يرجى ادخال رقم الهاتف",
    }),
  salary: Joi.string().required().messages({
    "any.required": "يرجى تحديد الراتب   ",
    "any.empty": "يرجى تحديد الراتب   ",
  }),
  bank: Joi.string().required().messages({
    "any.required": "يرجى اختيار البنك  ",
    "string.empty": "يرجى اختيار البنك  ",
  }),
  work: Joi.string().required().messages({
    "any.required": "يرجى اختيار قطاع العمل  ",
    "tring.empty": "يرجى اختيار قطاع العمل  ",
  }),
});
