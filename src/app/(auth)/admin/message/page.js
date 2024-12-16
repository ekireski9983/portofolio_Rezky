import Card from '../../../../components/card';

export default function AdminMessage() {
    return (
      <>
        <Card title="List of Message" style="mt-5">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>#No</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Name</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Email</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Subject</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Message</th>
                        <th className='p-2 border-b border-blue-gray-100 bg-gray-100'>Action</th>
                    </tr>
                </thead>
                <tbody>
               
                    <tr className='border-b border-blue-gray-50'>
                        <td className='p-2 '>1</td>
                        <td className='p-2 '>Jhon doe</td>
                        <td className='p-2 '>jhondoe@mail.com</td>
                        <td className='p-2 '>Loremipsum</td>
                        <td className='p-2 '>loremipsum loremipsum loremipsum</td>
                        <td className='p-2 '>
                            <div className="inline-flex text-[12px]">
                                <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                    Balas
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r">
                                    Arsipkan
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-blue-gray-50'>
                        <td className='p-2 '>2</td>
                        <td className='p-2 '>Jhon doe</td>
                        <td className='p-2 '>jhondoe@mail.com</td>
                        <td className='p-2 '>Loremipsum</td>
                        <td className='p-2 '>loremipsum loremipsum loremipsum</td>
                        <td className='p-2 '>
                            <div className="inline-flex text-[12px]">
                                <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                    Balas
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r">
                                    Arsipkan
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className='border-b border-blue-gray-50 '>
                        <td className='p-2 '>3</td>
                        <td className='p-2 '>Jhon doe</td>
                        <td className='p-2 '>jhondoe@mail.com</td>
                        <td className='p-2 '>Loremipsum</td>
                        <td className='p-2 '>loremipsum loremipsum loremipsum</td>
                        <td className='p-2 '>
                            <div className="inline-flex text-[12px]">
                                <button className=" bg-green-300 hover:bg-green-400 text-gray-800 py-2 px-4 rounded-l">
                                    Balas
                                </button>
                                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-r">
                                    Arsipkan
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
      </>
    );
}
  