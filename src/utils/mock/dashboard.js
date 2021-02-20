import {
  data,
  dataBubble,
  dataMixed,
  dataDoughnut,
  gridOptions,
  height,
  options,
  sharedOptions,
  stackedGridOptions
} from './chart';

export default [
  {
    type: 'doughnut',
    title: 'Misc',
    subtitle: 'Doughnut',
    data: dataDoughnut,
    height: height,
    options: {
      ...sharedOptions,
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    }
  },
  {
    type: 'bar',
    title: 'Revenue',
    subtitle: '+458,90',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Yearly Sales',
    subtitle: '-46,68',
    data: dataMixed,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...options
    }
  },
];
