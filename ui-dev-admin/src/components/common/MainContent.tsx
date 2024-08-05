import { Input, Select, Space, Table, TableProps, Tag } from 'antd';

const MainContent = () => {
  interface DataType {
    number: string;
    minimum: string;
    exprire: string;
  }

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Anonymous number',
      dataIndex: 'number',
      key: 'number',
      render: (text) => (
        <div>
          <a>{text}</a>
          <span> Resale</span>
        </div>
      ),
    },
    {
      title: 'Minimum bid',
      dataIndex: 'minimum',
      key: 'minimum',
      render: (text) => (
        <div>
          <div>
            👍
            <a>{text}</a>
          </div>
          <p> ~$8,185</p>
        </div>
      ),
    },
    {
      title: 'Auction ends in',
      dataIndex: 'exprire',
      key: 'exprire',
    },
  ];

  const data: DataType[] = [
    {
      number: '+84 987654321',
      minimum: '1133',
      exprire: '1 day 6 hours 15 minutes',
    },
    {
      number: '+84 987654321',
      minimum: '1133',
      exprire: '1 day 6 hours 15 minutes',
    },
    {
      number: '+84 987654321',
      minimum: '1133',
      exprire: '1 day 6 hours 15 minutes',
    },
  ];

  return (
    <>
      <div style={{ padding: '24px', textAlign: 'center' }}>
        <h2>Buy and Sell Anonymous Numbers</h2>
        <span>
          Trade IDs not tied to a SIM card which allow logging into Telegram with your blockchain
          account. These numbers only work on Telegram. Learn more
        </span>
      </div>
      <div>
        <Input style={{ borderRadius: '4px' }} placeholder="Enter a phone number" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <h2>Top Auctions</h2>
        <div>
          <Select
            showSearch
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
          <Select
            showSearch
            placeholder="Select a person"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default MainContent;
