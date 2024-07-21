import fetchPostById from "@/app/api/blog/fetchPostById";
import SectionTitle from "@/app/components/Text/SectionTitle";
import Subtitle from "@/app/components/Text/Subtitle";
import Text from "@/app/components/Text/Text";
import Title from "@/app/components/Text/Title";
import Image from "next/image";

interface BlogParams {
  id: number;
}

export default async function BlogIdPage({ params }: { params: BlogParams }) {
  try {
    // Fetch the blog post data
    const resp = await fetchPostById(params.id);

    // Check if the response is valid and contains the expected data
    if (!resp || resp.length === 0 || !resp[0].content) {
      throw new Error("Invalid response data");
    }

    const text = resp[0].content.split('\n');

    return (
      <main className='bg-palette-3 dark:bg-palette-950 flex flex-col content-center justify-center items-center min-h-screen'>
        <div className="flex items-center justify-center">
          <div className="p-8">
            <div className="text-center h-full">
              <div className="flex flex-row content-center items-center justify-center">
                <div className="flex flex-col w-[80%]">
                  <div className="flex flex-row content-center justify-center items-center">
                    <Title bold>
                      {resp[0].title}
                    </Title>
                  </div>
                  <div className="flex items-center space-x-4">
                    {resp[0].postByAvatar ? (
                      <Image className="w-7 h-7 rounded-full" src={resp[0].postByAvatar} alt={`${resp[0].postBy} avatar`} />
                    ) : (
                      <div className="w-7 h-7 rounded-full bg-palette-10 flex items-center justify-center">
                        <span className="text-palette-2 font-medium">
                          {resp[0].postBy.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <Subtitle bold lg>
                      {resp[0].postBy}
                    </Subtitle>
                  </div>
                  <div className="mt-2">
                    <ul className="list-disc list-inside">
                      {text.map((t: string, i: number) => {
                        if (t.startsWith('- ')) {
                          return (
                            <li key={i} className="w-full text-palette-11 dark:text-palette-50 text-left">
                              {t.replace('- ', '')}
                            </li>
                          );
                        } else if (text[i - 1] && text[i - 1].startsWith('- ')) {
                          return (
                            <Text key={i} margin className="mt-4">{t}</Text>
                          );
                        } else {
                          return (
                            <Text key={i} margin>{t}</Text>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return (
      <main className='bg-palette-3 flex flex-col content-center justify-center items-center min-h-screen'>
        <div className="flex items-center justify-center">
          <div className="p-8">
            <div className="text-center h-full">
              <SectionTitle>Error Loading Post</SectionTitle>
              <Subtitle>There was an error loading the blog post. Please try again later.</Subtitle>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
