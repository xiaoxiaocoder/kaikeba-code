<template>
  <div>
    <ul>
      <li 
      v-for="(feature, index) in features" 
      :key="index"
      @click="handleClick(feature)"
      :class="{selected: feature.selected}"
      > {{ feature }} </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import About from '@/views/About.vue';
import { Feature, FeatureSelected, Catch } from '@/types/index.ts';

@Component
export default class Hello extends Vue {
  @Prop()
  msg!: string;

  features: FeatureSelected[] = [{id: 1, name: '类型明确', selected: true}, {id: 2, name: '类型检测'}]
  featureSelected?: FeatureSelected;
  loading = false;

  handleClick(feature:FeatureSelected) {
    this.$set(feature, 'selected', !feature.selected)
  }

  created() {
    this.features.push({id: 3, name: '泛型'})
  }

  logMsg(msg: string) {
    console.log('from logmsg  ' + msg)
  }

  @Catch((vm, err) => vm.$message, 'loading')
  async mounted() {
    const { data } = await this.$http.get<Feature[]>('/api/list')
    this.features.push(...data)
  }

}
</script>

<style lang="stylus" scoped>
.selected 
  color: #5f1616;
</style>
