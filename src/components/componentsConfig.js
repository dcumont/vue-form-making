export const basicComponents = [
  {
    type: 'input',
    icon: 'icon-input',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      dataType: 'string',
      pattern: '',
      placeholder: '',
      disabled: false,
    }
  },
  {
    type: 'textarea',
    icon: 'icon-diy-com-textarea',
    options: {
      width: '100%',
      defaultValue: '',
      required: false,
      disabled: false,
      pattern: '',
      placeholder: ''
    }
  },
  {
    type: 'number',
    icon: 'icon-number',
    options: {
      width: '',
      required: false,
      defaultValue: 0,
      min: -Infinity,
      max: Infinity,
      step: 1,
      disabled: false,
      controlsPosition: ''
    }
  },
  {
    type: 'radio',
    icon: 'icon-radio-active',
    options: {
      inline: true,
      defaultValue: '',
      showLabel: true,
      options: [
        {
          value: 'Option 1',
          label: 'Option 1'
        },
        {
          value: 'Option 2',
          label: 'Option 2'
        },
        {
          value: 'Option 3',
          label: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      // remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      // remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'checkbox',
    icon: 'icon-check-box',
    options: {
      inline: true,
      defaultValue: [],
      showLabel: true,
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      required: false,
      width: '',
      remote: false,
      // remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      // remoteFunc: '',
      disabled: false,
    }
  },
  {
    type: 'time',
    icon: 'icon-time',
    options: {
      defaultValue: '21:19:56',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      isRange: false,
      arrowControl: true,
      format: 'HH:mm:ss',
      required: false,
      width: '',
    }
  },
  {
    type: 'date',
    icon: 'icon-date',
    options: {
      defaultValue: '',
      readonly: false,
      disabled: false,
      editable: true,
      clearable: true,
      placeholder: '',
      startPlaceholder: '',
      endPlaceholder: '',
      type: 'date',
      format: 'dd/MM/yyyy',
      timestamp: false,
      required: false,
      width: '',
    }
  },
  {
    type: 'rate',
    icon: 'icon-pingfen1',
    options: {
      defaultValue: null,
      max: 5,
      disabled: false,
      allowHalf: false,
      required: false
    }
  },
  {
    type: 'color',
    icon: 'icon-color',
    options: {
      defaultValue: '',
      disabled: false,
      showAlpha: false,
      required: false
    }
  },
  {
    type: 'select',
    icon: 'icon-select',
    options: {
      defaultValue: '',
      multiple: false,
      disabled: false,
      clearable: false,
      placeholder: '',
      required: false,
      width: '',
      showLabel: true,
      options: [
        {
          value: 'Option 1'
        },
        {
          value: 'Option 2'
        },
        {
          value: 'Option 3'
        }
      ],
      remote: false,
      filterable: false,
      // remoteOptions: [],
      props: {
        value: 'value',
        label: 'label'
      },
      // remoteFunc: ''
    }
  },
  {
    type: 'switch',
    icon: 'icon-switch',
    options: {
      defaultValue: false,
      required: false,
      disabled: false,
    }
  },
 /* {
    type: 'slider',
    icon: 'icon-slider',
    options: {
      defaultValue: 0,
      disabled: false,
      required: false,
      min: 0,
      max: 100,
      step: 1,
      showInput: false,
      range: false,
      width: ''
    }
  },
  {
    type: 'text',
    icon: 'icon-wenzishezhi-',
    options: {
      defaultValue: 'This is a text',
      customClass: '',
    }
  }*/
]

export const advanceComponents = [
  // {
  //   type: 'blank',
  //   icon: 'icon-zidingyishuju',
  //   options: {
  //     defaultType: 'String'
  //   }
  // },
  {
    type: 'imgupload',
    icon: 'icon-tupian',
    options: {
      defaultValue: [],
      size: {
        width: 100,
        height: 100,
      },
      width: '',
      tokenFunc: 'funcGetToken',
      token: '',
      /* Remove unused features of image upload in rendered form:
      domain: 'http://pfp81ptt6.bkt.clouddn.com/',
      disabled: false,
      */
      length: 1, /* Allow only single image upload */
      /* Allow only single image upload:
      multiple: false,
      */
      /* Remove Qiniu upload:
      isQiniu: false,
      */
      /* Remove unused features of image upload in rendered form:
      isDelete: false,
      min: 0,
      isEdit: false,
      action: 'https://jsonplaceholder.typicode.com/photos/'
      */
    }
  },
  {
    type: 'editor',
    icon: 'icon-fuwenbenkuang',
    options: {
      defaultValue: '',
      width: ''
    }
  },
  // {
  //   type: 'cascader',
  //   icon: 'icon-jilianxuanze',
  //   options: {
  //     defaultValue: [],
  //     width: '',
  //     placeholder: '',
  //     disabled: false,
  //     clearable: false,
  //     remote: true,
  //     // remoteOptions: [],
  //     props: {
  //       value: 'value',
  //       label: 'label',
  //       children: 'children'
  //     },
  //     // remoteFunc: ''
  //   }
  // }
]

export const layoutComponents = [
  // {
  //   type: 'grid',
  //   icon: 'icon-grid-',
  //   columns: [
  //     {
  //       span: 12,
  //       list: []
  //     },
  //     {
  //       span: 12,
  //       list: []
  //     }
  //   ],
  //   options: {
  //     gutter: 0,
  //     justify: 'start',
  //     align: 'top'
  //   }
  // }
]
