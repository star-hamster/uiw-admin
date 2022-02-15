import { useState } from 'react';
import { Params, useTableData, stateParams } from './types';

const useTable = (key: string, params: Params = {}): useTableData => {
  const { formatData, query, SWRConfiguration } = params;

  // 表单组件实例
  const [form, setForm] = useState<any>(null);

  const [state, setState] = useState<any>({
    // 当前页码
    pageIndex: 1,
    // 总页数
    total: 1,
    // 当前table数据源
    data: [],
    // 表单值
    searchValues: {},
    // 加载状态
    loading: false,
    // 选择框属性
    setPageIndex: () => null,
    mutate: () => null,
    selection: {
      selected: [],
      noneSelected: false,
      allSelected: false,
      partiallySelected: false,
      setSelected: () => null,
      isSelected: () => null,
      select: () => null,
      unSelect: () => null,
      toggle: () => null,
      selectAll: () => null,
      unSelectAll: () => null,
      toggleAll: () => null,
    },
  });

  // 更新store
  const updateStore = (datas: stateParams) => {
    setState({
      ...state,
      ...datas,
    });
  };

  // 更新form
  const updateForm = (form: any) => {
    setForm(form);
  };
  // 重置
  const onReset = async () => {
    const isNoError = await form.current.onSubmit();
    if (isNoError) {
      await state.setPageIndex(1);
      await form.current.resetForm();
      state.mutate(false);
    }
  };
  // 刷新当前页数据
  const onRefersh = async () => {
    state.mutate(false);
  };
  // 点击查询
  const onSearch = async () => {
    const isNoError = await form.current.onSubmit();
    if (isNoError) {
      await state.setPageIndex(1);
      state.mutate(false);
    }
  };

  return {
    key,
    // 重置
    onReset,
    // 刷新当前页数据
    onRefersh,
    // 点击查询
    onSearch,
    formatData,
    query,
    updateStore,
    SWRConfiguration,
    form,
    updateForm,
    ...state,
  };
};

export default useTable;
