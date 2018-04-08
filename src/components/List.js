import React, { Component } from 'react';
import { PullToRefresh, ListView} from 'antd-mobile';
import { connect} from 'react-redux'
import * as actions from '../redux/actions'

const data = [
  {
      "id": '1',
      "img": "https://image.missfresh.cn/0f9c63aa9e734a4c8f84eb82967e9f60.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "四川不知火丑柑140-200g*4个",
      "des": "生了皱纹的丑柑橘  酸甜可口",
      "money": "13.9"
  },
  {
      "id": '2',  
      "img": "https://image.missfresh.cn/bf24a6e7e96e40b7ba9fa9306ee3ddd9.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "西班牙脐橙180-280g*2个",
      "des": "晒足阳光  只为沉淀更多甜蜜",
      "money": "11.9"
  },
  {
      "id": '3',          
      "img": "https://image.missfresh.cn/9578056cc5d140a2925e66fd68e2c9a7.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "进口红提500g*1盒",
      "des": "原产于智利的大个头红提",
      "money": "19.9"
  },
  {
      "id": '4',      
      "img": "https://image.missfresh.cn/product_images/7EC82E5D5B091F979A156D286672B7D8.JPG?iopcmd=thumbnail&type=4&width=200",
      "title": "每日坚果25g*5包",
      "des": "集合7种营养的补给站 开张啦",
      "money": "24.5"
  },
  {
      "id": '5',    
      "img": "https://image.missfresh.cn/cf563c7ab690464cb71f416da8597f1a.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "鲜水果玉米2根",
      "des": "可以冒浆的才敢称鲜玉米",
      "money": "11.9"
  },
  {
      "id": '6',      
      "img": "https://image.missfresh.cn/a31ddc8e2e304d118354054bf136e004.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "在家吃饭 加拿大北极虾200g",
      "des": "晒北极虾，又叫北极长额虾，不过大家一般都叫我北极甜虾",
      "money": "8.99"
  },
  {
      "id": '7',          
      "img": "https://image.missfresh.cn/0197f9b538ad48719b461d129e6cf36e.jpg?iopcmd=thumbnail&type=4&width=200",
      "title": "【买一赠一】午餐肉290g",
      "des": "全新工艺低温午餐肉超高肉含量",
      "money": "24.9"
  },
  {
      "id": '8',          
      "img": "https://image.missfresh.cn/product_images/1967450F2F869788174FF8167057A46F.JPG?iopcmd=thumbnail&type=4&width=200",
      "title": "进口螺蛳粉先生螺蛳粉350g",
      "des": "鲜酸辣爽 就馋这一口",
      "money": "15.8"
  }
]
  const NUM_ROWS = 20;
  let pageIndex = 0;
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }  

class List extends Component {
      constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
    
        this.state = {
          dataSource,
          refreshing: true,
          isLoading: true,
          height: document.documentElement.clientHeight,
        };
      }
      componentDidUpdate() {
        if (this.state.useBodyScroll) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
      }
    
      componentDidMount() {
        // const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(genData()),
            // height: hei,
            refreshing: false,
            isLoading: false,
          });
        }, 1500);
      }

      onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true });
        // simulate initial Ajax
        setTimeout(() => {
          this.rData = genData();
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            refreshing: false,
            isLoading: false,
          });
        }, 600);
      };
    
      onEndReached = (event) => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading && !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
          this.rData = [...this.rData, ...genData(++pageIndex)];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
          });
        }, 1000);
      };


    render() {
        const separator = (sectionID, rowID) => (
            <div
              key={`${sectionID}-${rowID}`}
              style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
              }}
            />
          );
          let index = data.length - 1;
          const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
              index = data.length - 1;
            }
            const obj = data[index--];
            return (
              <div key={rowID}
                style={{
                  backgroundColor: 'white',
                }}
              >
                <div style={{ height: '50px',padding:'0 15px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                  {obj.title}
                </div>
                <div onClickCapture={() => {
                  this.props.history.push(`/detail/${obj.id}`)       // 跳转详情页                    
                }} style={{ display: 'flex', padding: '15px', cursor: 'pointer' }}>
                  <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
                  <div style={{ flex: '1' }}>
                    <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}</div>
                    <div style={{ fontSize: '16px' }}>￥<span style={{ fontSize: '30px', color: '#FF6E27' }}>{obj.money}</span>
                      <div onTouchStart={(e) => {
                        e.stopPropagation()
                        this.props.goods(obj)    // 添加购物车
                      }} style={{ display: 'inline-block', float: 'right', width: '50px', height: '50px' }} ><img style={{width: '100%', height: '100%'}} src="https://j-image.missfresh.cn/img_20170425134548759.png" alt=""/> </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };
        return (
            <ListView
            // ref={el => this.lv = el}
            dataSource={this.state.dataSource}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            renderSeparator={separator}
            useBodyScroll={this.state.useBodyScroll}
            style={this.state.useBodyScroll ? {} : {
              height: this.state.height,
              border: '1px solid #ddd',
              margin: '5px 0',
            }}
            pullToRefresh={<PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />}
            onEndReached={this.onEndReached}
            pageSize={5}
          />
        );
    }
}

export default connect(
  (state) => {
      return {

      }
  },
  (dispatch) => {
      return {
          goods(msg) {
            actions.goods(dispatch, msg)
          }
      }
  }
)(List);