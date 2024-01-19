# antv

## problems
1. 自定义组件的校验问题
```js
<template>
  <a-input-group compact>
    <a-input
      v-model:value="symbol"
      :placeholder="`${$attrs.placeholder ?? '请输入或生成标识'}`"
      :maxlength="20"
      :style="{ width: 'calc(100% - 60px)' }"
      @change="change"
    >
    </a-input>
    <a-button @click="getProjectUuid" style="width: 60px">生成</a-button>
  </a-input-group>
</template>

<script setup lang="ts">
import { getUuid } from '@/utils/index';
import { useVModel } from '@vueuse/core';
import { useInjectFormItemContext } from 'ant-design-vue/lib/form';
import { FormItemExpose } from 'ant-design-vue/lib/form/FormItem';
import { getCurrentInstance } from 'vue';
const currentIns = getCurrentInstance();

interface Props {
  modelValue: string;
}
const change = () => {
  // onFieldChange只能在input 的_input事件触发时触发有效，在下面个getProjectUuid中出发无效，所以需要获取formItem暴露的具体onFieldChange方法来触发校验
  formItemContext.onFieldChange();
};
const props = defineProps<Props>();
const emits = defineEmits(['update:modelValue', 'change']);
const symbol = useVModel(props, 'modelValue', emits);
const formItemContext = useInjectFormItemContext();
// 遍历parent找到formItem组件，触发校验
const getParentFormItemExpose = (source): FormItemExpose => {
  if (source.type.name === 'AFormItem') {
    return source.exposed;
  } else {
    return getParentFormItemExpose(source.parent);
  }
};
const getProjectUuid = () => {
  symbol.value = getUuid().slice(0, 16);
  const formItemExpose = getParentFormItemExpose(currentIns);
  formItemExpose.onFieldChange();
};
</script>

<style scoped></style>

```