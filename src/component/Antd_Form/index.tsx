import React, {FC} from 'react';
import {Button, Form, Input, Space, Layout, Row, Col} from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons';



const Home: FC = () => {
    const alertMessage = (json:JSON)=>{
        alert(JSON.stringify(json))
    }
    // @ts-ignore
    return (
        <React.Fragment>
            <Layout>
                <Row>
                    <Col offset={4} span={24}>
                        <Form
                            layout={'vertical'}
                            name={'demo'}
                            onFinish={alertMessage}
                        
                        >
                            <Form.Item
                                labelCol={{span:6}}
                                wrapperCol={{span:6}}
                                name={'name'}
                                label={'姓名'}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                labelCol={{span:6}}
                                wrapperCol={{span:6}}
                                name={'password'}
                                label={'密码'}
                            >
                                <Input/>
                            </Form.Item>
                            <Form.List
                                name={'list'}

                            >
                                {
                                    (fields, {add, remove}, {errors}) => (
                                        <>
                                            {fields.map(({key , name, ...restField}) => (
                                                <Space
                                                    key={key}
                                                    size={'large'}
                                                    style={{ display: 'flex', marginBottom: 8 }}
                                                    align="baseline">
                                                    <Form.Item
                                                        label='你知道的key'
                                                        labelCol={{span:24}}
                                                        wrapperCol={{span:24}}
                                                        {...restField}
                                                        name={[name, 'first']}
                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                    >
                                                        <Input placeholder="First Name" />
                                                    </Form.Item>
                                                    <Form.Item
                                                    label={'对应key的密码'}
                                                        labelCol={{span:24}}
                                                        wrapperCol={{span:24}}
                                                        {...restField}
                                                        name={[name, 'last']}
                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                    >
                                                        <Input placeholder="Last Name" />
                                                    </Form.Item>
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                </Space>
                                            ))}
                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={()=>add('')}
                                                    style={{width: '60%'}}
                                                >
                                                    Add field
                                                </Button>
                                                <Form.ErrorList errors={errors}/>
                                            </Form.Item>
                                        </>
                                    )
                                }
                            </Form.List>
                            <Form.Item>
                                <Space align='center' size={'large'} direction='horizontal'>
                                    <Button htmlType={'submit'} type={'primary'}>submit</Button>
                                    <Button htmlType={'reset'}>reset</Button>
                                </Space>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>

            </Layout>

        </React.Fragment>
    )
}
export default Home;
