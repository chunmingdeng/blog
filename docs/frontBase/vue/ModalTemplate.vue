<template>
  <a-modal
    v-model:visible="$props.visible"
    :title="`${$props.data?.id ? '编辑' : '新增'}平台`"
    @cancel="actions.cancel"
    @ok="actions.ok"
    :okBtnProps="{loading: loading}"
  >
    <a-form
      ref="formRef"
      :model="formState"
      :labelCol="{ style: { width: '90px' } }"
    >
    </a-form>
  </a-modal>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, computed } from "vue";
import { message } from "ant-design";
import { create, update } from "@/api/iot-card/platform";

const props = defineProps({ visible: Boolean, data: Object });
const emit = defineEmits(["update:visible", "update:data", "success"]);
const visible = computed({
  get: () => props.visible,
  set: () => emit('update:visible', false),
});
const loading = ref(false);
const actions = {
  ok() {
    formRef.value.validate().then(async () => {
      loading.value = true;
      const p = {};
      const { code } = await (props.data?.id ? update(p) : create(p));
      if (code === 200) {
        message.success("操作成功");
        emit("success");
        actions.reset();
      }
    });
  },
  cancel() {
    actions.reset();
  },
  reset() {
    emit('update:visible', false);
    emit('update:data', undefined);
    formActions.reset();
  }
};
const formRef = ref();
const formData = {};
const formState = reactive(Object.assign({} as any, formData));
const formActions = {
  reset() {
    visible.value = false;
    emit('update:data', undefined);
    Object.keys(formData).forEach((k) => {
      formState[k] = formData[k];
    });
  },
};
watchEffect(() => {
  if (props.data) {
    const { data } = props;
  }
});
</script>

<style scoped></style>
